require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send("<h1>login completed bishal</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port localhost:${process.env.PORT}`)
})