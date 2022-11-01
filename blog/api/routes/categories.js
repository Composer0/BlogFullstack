const express = require('express');
const router = express.Router();
const Category = require("../models/Category");

//CREATE
//I'm using this to define my current categories for the webpage. Users will not be able to create categories. My blog will focus exclusively on Music, Coding, Food, and Life topics.
router.post('/', async (req, res) => {
    const newCategory = new Category(req.body);
    try{
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory)
    }catch(err){
        res.status(500).json(err)
    }
});



router.get('/', async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json(categories)
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router