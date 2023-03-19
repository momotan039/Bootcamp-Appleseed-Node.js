const http=require('http')

const server=http.createServer((req,res)=>{
res.end('hi from server')
})

server.listen(1987,()=>{
    console.log('server listening on port 1987');
})