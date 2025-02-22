const express = require('express')
const path = require('path')
const cors = require('cors')

const htmlfile = path.join(__dirname,'index.html')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
    res.json({message: "hello avinash, how are you?"})
})

app.get('/babu', (req, res)=> {
    res.json({message: 'why are you requestion on babu'})
})

app.get('/page', (req, res)=> {
    res.sendFile(htmlfile)
})

app.listen(3000, () => {
    console.log('Your app is live on http://localhost:3000')
})