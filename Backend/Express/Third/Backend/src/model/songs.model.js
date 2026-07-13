const mongoose=require("mongoose");
const songSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    artist:{
        type:String,
        required:true
    },
    mood:{
        type:String,
        required:true
    },
    audioFile:{
        type:String,
        required:true
    }
})

const songModel=mongoose.model("songs",songSchema);
module.exports=songModel