var ImageKit = require("imagekit");
const mongoose = require("mongoose");

var imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer,
            folder: "akg1-audio",
            fileName: new mongoose.Types.ObjectId().toString()
        }, (err, result) => {
            if (err) {
                reject()
            }
            else {
                resolve(result)
            }
        })
    })
}

module.exports = uploadFile;