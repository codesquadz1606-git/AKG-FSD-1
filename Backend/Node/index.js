import inquirer from "inquirer"; // for prompt
import qr from 'qr-image'
import fs from 'fs'

inquirer.prompt([
    {
        message:"Enter the url/text for qr-image:",
        name:"URL"
    },
    {
        message:"Enter File Name",
        name:"filename"
    }
])
.then((answers)=>{
    // console.log(answers);
    let {URL,filename}=answers;
    var qr_png=qr.image(URL,{type:"png"});
    qr_png.pipe(fs.createWriteStream(`${filename}_url.png`));

    fs.appendFile("totalUrls.txt",URL,(err)=>{
        if(err) throw err;
    })
})
.catch((err)=>{
    console.log(err)
})