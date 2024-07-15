const client = require("./client")

async function getAllData() {
    try {
        const { rows } = await client.query("select * from data")
        return rows
    } catch (error) {
        console.log("oh nose!", error)
        throw error
    }
}

async function getValueByKey(key) {
    try {
        const { rows } = await client.query(`
        select * from data where key = $1
        `, [username])
        return rows
    } catch (error) {
        console.log("oh nose!", error)
        throw error
    }
}

async function createData({ key, value }) {
    try {
        const { rows } = await client.query(`
            insert into data(key, value)
            values ($1, $2)
            returning *;
        `, [key, value])
        return rows[0]
    } catch (error) {
        console.log("oh nose", error)
        throw error
    }
}

module.exports = {
    getAllData,
    getValueByKey,
    createData
}