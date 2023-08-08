

const express = require('express')
const cors = require("cors")

const app = express();

app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
    res.send("welcome to tamazon")

})


app.get('/product',(req,res)=>{
    res.send([1,2,3])
})

const port  = process.env.PORT || 5001


app.listen(port,console.log(`server running on ${port}`))