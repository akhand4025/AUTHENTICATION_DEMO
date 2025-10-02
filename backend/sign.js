const express= require("express");
const router=express.Router();
const info=require("./db.js");

router.post("/signup",async function(req,res){
   const {name,password} =req.body;
   try{
    const existname=await info.findOne({username:name});
    if(existname){
       return res.status(409).json({msge:"User already exist"});
    }
    const newuser=new info({
        username:name,
        password:password
    })
    await newuser.save();
    return res.status(200).json({msge:"info added"});

   }catch(err){
      res.status(500).json({msge:"Something went wrong"});
   }
})



router.post("/signin",async function(req,res){
    const {name,password}=req.body;

    try{
        const userexist= await info.findOne({username:name,password:password});
        if(!userexist){
            return res.status(409).json({msge:"user doesn't exist"});
        }else{
            return res.status(200).json({msge:"Login Successful"});
        }

    }catch(err){
        res.status(500).json({msge:"something went wrong"});
    }
})


module.exports={router};