const express = require('express')
const app = express()
const customer = require('./models/Customers')
const path = require('path')

const pub = path.join(__dirname, 'public')

app.get('/', (req, res) => {
    res.send("Hello Cream")
})
app.get('/products', (req, res)=> {
    res.sendFile(path.join(pub, 'index.html'))
})

app.get('/about',(req, res) => {
    res.send("Hello Nice")
})

app.get("*",(req, res)=> {
    res.status(404).send("ไม่พบหน้าที่ต้องการค้นหา")
})

app.listen(3001, () => {
    console.log("Start server at port 3001")
})

