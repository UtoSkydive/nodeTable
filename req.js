const express = require('express')
const app = express()
app.get('/user/:id',function(req,res){
    res.send('hello' +  req.params.id)
})
app.listen(3000,()=>{
    console.log('listen at prt 3000')
})