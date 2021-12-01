const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("Basic Ci/Cd with azure")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log('Server in running on port 5000...')
})