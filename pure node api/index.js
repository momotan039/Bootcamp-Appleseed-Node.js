const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    // const homePage=fs.createReadStream('home.html')
    // homePage.pipe(res)
    res.end('welcome to home page 1')
})

server.listen(8000,'localhost',()=>{
console.log('server is listening now');
})