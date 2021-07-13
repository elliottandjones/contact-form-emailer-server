const express = require('express')
const cors = require('cors')
// const nodemailer = require('nodemailer')

const router = express.Router()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)
// app.options('*', cors())

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server is up on port *: ${port}`))
