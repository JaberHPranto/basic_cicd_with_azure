const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Basic Ci/Cd with azure")
})

app.listen(5000,()=>{
    console.log('Server in running on port 5000...')
})