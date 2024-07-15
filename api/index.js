const express = require("express")
const apiRouter = express.Router()

apiRouter.use("/data", require("./data"))
module.exports = apiRouter