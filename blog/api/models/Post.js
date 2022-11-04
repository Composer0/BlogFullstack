const mongoose = require('mongoose'); 
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM(new JSDOM().window));

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            // required:["life", "music", "food", "code"]
            required: false
        },
        sanitizedHtml: {
            type: String,
            required: true
        }
    },    
    {timestamps: true} //creates updated and added times.
);

PostSchema.pre('validate', function(next) {
    if (this.description) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }
})

module.exports = mongoose.model("Post", PostSchema);
