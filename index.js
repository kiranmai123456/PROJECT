//importing packages
const express=require("express");
const bodyparser=require("body-parser");
const mongo=require("mongoose");

//multer
const multer=require("multer");
const upload=multer({dest:"uploads/"});

//app
const app=express();

const schema=require('./models/schema.js');
const routes=require('./routes/routes.js');

//use parsers
app.use(bodyparser.json());

app.use('/facultyDetails',routes);

//multer path
/*app.post('/test',upload.single("image"),(req,res)=>{
    res.send("uploaded...")
});*/

//disk storage
const instorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + '-' + file.originalname)
    }
});
const upload1=multer({storage:instorage})
app.post('/test',upload1.single("image"),(req,res)=>{
    console.log(req.file)
    res.send("file uploaded..");
});
/*app.post('/test',upload.single("image"),(req,res)=>{
    console.log(req.file)
    res.send("file uploaded...")
});*/
//db connect
mongo.connect("mongodb://localhost:27017/facultyDetails",{UseNewUrlParser:true},()=>console.log("connected to database..."));

//listening
app.listen(2048,console.log("listening at 2048.."));

