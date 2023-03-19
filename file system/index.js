const fs=require('fs')
// fs.writeFileSync('file.text','hello in fs Module')
// fs.copyFileSync('./file.text','copyFile.text')
// fs.renameSync('file.text','file2.text')
// fs.readdir('.',(err,files)=>{
//     if(err)
//     console.log(err);
//     console.log(files);
// })

const content=fs.readFileSync('file2.text','base64')
console.log(content);