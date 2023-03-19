const express=require('express')
const app=express()
const root='/api/v1'
app.use(express.json());

app.get(root,(req,res)=>{
    res.send('Welcome to our API v1')
})

app.use(express.static('../client'));

app.get('/', function(req, res) {
  res.sendFile('../client/index.html');
});

app.use(`${root}/movies`,require('./routes/movies'))

app.listen(8000,()=>{
    console.log(__dirname);
    console.log('server started');
})



