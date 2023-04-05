const express = require("express");
const mongoose = require("mongoose");

const REGISTER = mongoose.model("REGISTER");

const router = express.Router();


router.post("/register",async(req,res)=>{
    console.log(req.body);

    const {name, contact, address,  wish_description}=req.body

    if(!name || !contact ||!address ||!wish_description){
      return  res.status(422).json({error:"Could not Register:Please fill all the fields"})
    }
   
    try{
   const saveduser= await REGISTER.findOne({name:name})

        if(saveduser){
        return res.status(422).json({error:"Already registered"})}
   
    
    const register = new REGISTER({name, contact, address,  wish_description})

    await register.save()
    
    res.status(200).json({message:"Successfully Registered"})
        }
        catch (err){
            console.log(err)

        }
})


module.exports = router