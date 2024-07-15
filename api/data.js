const express = require("express")
const router = express.Router()

const { getAllData, createData } = require("../db")

router.get("/", async (req, res) => {
    try {
        const data = await getAllData()
        res.send({ data })
    } catch (error) {
        console.log("oh nose! couldn't get all customers", error)
    }
})

// router.get("/", async (req, res)=>{
//     res.send("this is the root of customers")
// })

router.post("/", async (req, res) => {
    try {
        const { key, value } = req.body
        const data = await createData({ key, value })
        res.send(data)

    } catch (error) {
        console.log("oh nose! couldn't login", error)
    }
})

module.exports = router
