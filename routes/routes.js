const express=require("express");
const router=express.Router();
const schema=require("../models/schema.js");

//get
router.get('/get',async(req,res)=>{
    const gett=await schema.find();
    res.send(gett);
});

//post
router.post('/post',async(req,res)=>{
    const kiran=new schema({
        name:req.body.name,
        designation:req.body.designation,
        educationQualification:req.body.educationQualification,
        department:req.body.department
    });
    try{
        await kiran.save();
        res.send("saved to db...")
    }
    catch{
        res.send(err.message);
    }
});

//delete
router.delete('/:id',async(req,res)=>{
    try{
        await schema.remove({_id:req.params.id});
        res.send("deleted...")
    }
    catch(err){
        res.send(err.message);
    }
});

//patch
router.patch('/:id',async (req,res)=>{
    try{
        const kiran=await schema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.send(kiran)
    }
    catch(err){
        res.send(err.message);
    }
});


module.exports= router;
