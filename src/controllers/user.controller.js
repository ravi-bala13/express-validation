const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

const User = require("../models/user.model")

router.post(
    "/",
    body("first_name").isLength({min: 1}).withMessage("First_name is required"),
    body("last_name").isLength({min: 1}).withMessage("Last_name is required"),
    // body("email").isEmail().withMessage("please check email"),
    body("email").custom(async (value) => {
        const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
        if(!isEmail){
            throw new Error("Please enter a proper email address");
        }
        const userByEmail = await User.findOne({email: value}).lean().exec();

        if(userByEmail){
            throw new Error("Please try with a different email address")

        }

        const valueDomain = value.split('@');
        const myDomains = ["gmail.com", "yahoo.com"];

        if( !(myDomains.includes(valueDomain[1])) ){
            throw new Error("we can't accept these domains")
        }
        // console.log('valueDomain:', valueDomain)
        
        return true;
    }),
    body("pincode").isLength({min: 6, max: 6}).withMessage("pincode must be 6 digits"),
    body("age").isLength({min: 1}).withMessage("age is required").custom(async (value) => {
        if(value < 1 || value > 100){
            throw new Error("Please enter age between 1 to 100")
        }
        return true;
    }),
    body("gender").isLength({min: 1}).withMessage("gender is required").custom(async (value) => {
        const genders = ["Male", "Female", "Others"]
        if( !(genders.includes(value)) ){
            throw new Error("Age should be either Male, Female or Others ")
        }
        return true;
    }),
    async (req, res) => {
    
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({data: errors.array()});
        }
        const user = await User.create(req.body);

        return res.status(201).json({data: user})

    }
);



module.exports = router;