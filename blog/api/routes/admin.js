const express = require('express');
const router = express.Router();
const Admin = require("../models/Admin");
const Post = require("../models/Post");
const bcrypt = require("bcrypt")


router.post("/admin", async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt); //this will hash the password.
        const newAdmin = new Admin({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass //without bcrypt this would be req.body.password.
        }) // we could have simply wrote req.body to gather all info, but the purpose of writing it all out is to present clean code.
        const admin = await newAdmin.save(); //updates the database with the user.
        res.status(200).json(admin)
    } catch(err){
        res.status(500).json // this error indicates that there is something wrong with the server. Being official ra
    }
})
// async is used because we don't know how long it will take for the user to become registered within the database.

router.post("/login", async (req, res) => {
    try{
        const admin = await Admin.findOne({username: req.body.username})
        !admin && res.status(400).json("Wrong Combination of Username and Password. Please Try Again.")
        const validated = await bcrypt.compare(req.body.password, admin.password)
        !validated && res.status(400).json("Wrong Combination of Username and Password. Please Try Again.")
        const {password, ...others} = admin._doc(); //._doc function added to avoid showing far more information than needed in our attempt to remove the password from the requested information. This method is deprecated.
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);
    }
})


//UPDATE
router.put("/:id", async (req, res) => {
        if(req.body.adminId === req.params.id) {
            if(req.body.password){
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }    
            try{
                const updateAdmin = await Admin.findByIdAndUpdate(req.params.id, {$set: req.body,
                }, {new: true});
                res.status(200).json(updateAdmin);
            } catch(err){
                res.status(500).json
            }
    } else {
        res.status(401).json("You can update only your account.");
    }
})


//DELETE
router.delete("/:id", async (req, res) => {
    if(req.body.adminId === req.params.id) {
        try{
            const admin = await Admin.findById(req.params.id);
            try{
                await Post.deleteMany({username:admin.username});
                await Admin.findByIdAndDelete(req.params.id)
                res.status(200).json("Admin has been deleted.");
            } catch(err){
                res.status(500).json
            }
        }catch (err) {
            res.status(404).json("Admin not found.");
        }
    } else {
        res.status(401).json("You can delete only your account.");
}
});

//READ Admin
router.get("/:id", async (req, res) => {
    try{
        const admin = await Admin.findById(req.params.id);
        const {password, ...others} = admin._doc
        res.status(200).json(others)
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;