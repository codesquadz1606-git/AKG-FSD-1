import fs from 'fs'

// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// fs.writeFile("demo1.txt","This is new file from fs",(err)=>{
//     if(err) throw err;
//     console.log("Data written");
// })

// The write file overlaps the previous data with new data
// fs.writeFile("demo1.txt","\nThis is new line",(err)=>{
//     if(err) throw err;
//     console.log("Data Updated");
// })

// fs.appendFile("demo1.txt","This is my append text",(err)=>{
//     if(err) throw err;
//     console.log("Data Append");
// })

// fs.unlink("demo1.txt",(err)=>{
//     if (err) throw err;
//     console.log("File Deleted");
// })


// from our backend server we can create the png qr_png for any link.