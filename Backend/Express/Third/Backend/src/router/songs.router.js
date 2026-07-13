const express=require("express");
const { allSong, createSong } = require("../controller/song.controller");
const router=express.Router()

const multer = require("multer");

const storage=multer({
    storage:multer.memoryStorage(),
    limits:{
        file:20,
        fileSize:200*1024*1024
    }
})

router.post("/song",storage.array("audioFile"),createSong);
router.get("/songs",allSong);

module.exports=router