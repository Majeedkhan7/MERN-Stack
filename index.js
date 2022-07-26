require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())


app.listen(process.env.SERVER_PORT,()=>{
    console.log(`server on port no ${process.env.SERVER_PORT}`);
})