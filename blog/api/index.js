const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const adminRoute = require("./routes/admin");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path")
const cors = require('cors')


app.use(cors({
    origin: "*",
}));
dotenv.config();
app.use("/images", express.static(path.join(__dirname, "/images")))
// app.use(express.static(path.resolve(__dirname, "../client/build"))); //Node will serve files from the React app.
// app.get("/api", (req,res) => {
    //     res.json({message: "I think we're in business"}); 
    // }) //Handle GET requests to /aApi route.
    // app.get('*', (req, res) => {
        //     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
        // }) // All other Get requests not handled before will return our React app.
        
        // app.use(cors());
        
        // const MONGO_URL = `mongodb://${process.env.MONGOUSER }:${ process.env.MONGOPASSWORD }@${ process.env.MONGOHOST }:${ process.env.MONGOPORT }`
        mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to Railway.app")).catch((err) => console.log(err));
        // mongoose.connect(process.env.DATABASE_URL).then(console.log("Connected to Railway.app")).catch((err) => console.log(err));
        // Mongoose always treats creating a new index as true so it is no longer required in the code. If false then you will need to indicate it in the code. Otherwise you are absolutely fine.
        
        //Multer code being used for picture upload and storage on the server.
        const storage = multer.diskStorage({
            destination:(req, res, cb) => {
                cb(null,"images")
            }, filename:(req, res,cb) =>{
                cb(null, req.body.name)
            },
        }); //cb stands for callback function

        const upload = multer({storage:storage});
        app.post("/api/upload", upload.single("file"), (req, res)=>{
            res.status(200).json("file has been uploaded.")
});

app.use("/images", express.static(path.join(__dirname,"./images")))
//End of Multer code.


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });

app.use(express.json()); //allows json objects to be sent.
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/admin", adminRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

// app.use('/', (req, res) => {
//     res.console.log("Hello Creators' Blog")
// })

// app.get('/', (req, res) => {
//     res.json({msg: 'Hello world!!!'});
// });

app.use("/", (req, res) => {
    res.send("This Url is being seen")
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running");
})