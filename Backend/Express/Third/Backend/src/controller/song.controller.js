const uploadFile = require("../storage/songs.storage");

const createSong= async(req,res)=>{
    const {title,artist,mood}=req.body;
    const data=req.files;

    console.log(data)

    for(let i=0;i<data.length;i++){
        const fileData=await uploadFile(data[i])
    }

    res.json({
        message:"Song Created"
    })
}
const allSong=(req,res)=>{
    res.json({
        message:"All Songs Fetched"
    })
}

module.exports={
    createSong,
    allSong
}