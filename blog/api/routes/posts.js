const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", async (req, res) => {
        try{
           const post = await Post.findById(req.params.id); //don't forget await
           if(post.username === req.body.username){
                try{
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                        $set:req.body
                    },{new:true})
                    res.status(200).json(updatedPost)
                }catch(err){
                    res.status(500).json(err)
                }
            } else {
                res.status(401).json("You can only update your post!")
            }

        }catch(err){
            res.status(500).json(err)
        }
})


//DELETE
router.delete("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id); //don't forget await
        if(post.username === req.body.username){
             try{
                 await post.delete()
                 res.status(200).json("Post deleted.")
             }catch(err){
                 res.status(500).json(err)
             }
         } else {
             res.status(401).json("You can only delete your post!")
         }

     }catch(err){
         res.status(500).json(err)
     }
});

//READ USERS
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err)
    }
})

//GET ALL POSTS
router.get("/", async (req, res) => { //Pathing will be ?user= based on whether we end up looking for a post by username or category.
    const username = req.query.user;
    const catName = req.query.categories;
    try{
        let posts;
        if(username){
            posts = await Post.find({username})
        } else if(catName) {
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router