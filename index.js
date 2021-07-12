const http = require('http')
const express = require('express')
const cors = require('cors')
const router = require('./router')

const app = express()
const server = http.createServer(app)

app.use(cors())
app.options('*', cors())
app.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`Server is up on port *: ${port}`))
