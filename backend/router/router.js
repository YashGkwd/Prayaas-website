const express = require("express");
const mongoose = require("mongoose");

const REGISTER = mongoose.model("REGISTER");

const router = express.Router();

module.exports = router

router.post("/register",(req,res)=>{
    console.log(req.body);
})
