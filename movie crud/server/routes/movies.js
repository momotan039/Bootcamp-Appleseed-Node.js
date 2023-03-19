const express=require('express')
const router=express.Router()

let movies=[
    {
        id:1,
        title:'Dragon ball return Coulr',
        year:1996
    },
    {
        id:2,
        title:'GO TO THE FUTURE',
        year:2023
    },
    {
        id:3,
        title:'Islam\'s History',
        year:2023
    },
]

router.get('/',(req,res)=>{
    res.send(movies)
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    const movie=movies.find(f=>f.id===id)
    // check if its exists
    if(!movie)
        res.status(404).send({
            'message':'not found movie'
        })

    movies=movies.filter(f=>f.id!==id)
    res.send(`movie with ${id} id deleted successfully`)
})


router.post('/add',(req,res)=>{
    const obj=req.body
    const movie=movies.find(f=>f.title===obj.title && f.year===obj.year)
    if(movie)
    res.status(400).json({
        'message':'this movie already exists'
    })
    obj.id=movies.length+1
    movies.push(obj)
    res.send('movie added successfully')
})


router.put('/edit/:id',(req,res)=>{
    const obj=req.body
    const id=req.params.id
    const index=movies.findIndex(f=>f.id===id)
    console.log(index);
    if(index===-1)
    res.status(404).json({
        'message':'this movie not found'
    })
    movies[index].title=obj.title
    movies[index].year=obj.year
    res.send('movie edited successfully')
})

module.exports=router