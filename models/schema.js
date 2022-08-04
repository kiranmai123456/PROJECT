const mongo=require("mongoose");
const dbSchema=mongo.Schema({
    name:{
        type:String,
        required:true
    },
    educationQualification:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    }
    /*department:{
        type:String,
        required:true
    },
    teachingOrNonTeacing:{
        type:String,
        required:true
    },
    subjectTeaching:{
        type:String,
        required:true
    },
    permanentOrGuestFaculty:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    achievement:{
        type:String,
        required:true
    },
    mailId:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:false
    }*/

},
{collection:'details'}
);
module.exports=mongo.model("faculty_details",dbSchema)