const express = require('express')

const app = express()

app.get('/', (req,res)=>{

    res.send('DevOps CI/CD Pipeline Working version 3 ')

})

app.listen(3000, ()=>{

    console.log('Server Started')

})
 
