// 1. setup
const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()

// 2. route
// connect to the database
const client = require("./db/client")
client.connect()



const apiRouter = require("./api")
app.use("/api", apiRouter)

// 3. start server
app.listen(8080, () => {
    console.log("server is up and running :D")
})