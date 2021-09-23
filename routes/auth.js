const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")
//register 
router.post("/register", async(req, res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password :CryptoJS.AES.encrypt(req.body.password, process.env.ENCRYPT_KEY).toString()
    });
    try {
        const user = await newUser.save();
        const {password, ...rest} = user._doc;
        res.status(201).json(rest);
    } catch (error) {
        res.status(500).json(error)
    }
})

//login
router.post("/login", async(req, res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong email or password")

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.ENCRYPT_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        originalPassword !== req.body.password && res.status(401).json("Wrong email or password");

        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.TOKEN_KEY, {expiresIn:"2d"})

        const {password, ...rest} = user._doc;
        res.status(200).json({...rest, accessToken});
    } catch (error) {
         res.status(500).json(error)
    }
})

module.exports = router;