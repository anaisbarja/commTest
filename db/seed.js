const client = require("./client")
const { createData } = require("./")

async function dropTables() {
    try {
        await client.query("drop table if exists data")
    } catch (error) {
        console.log("oh nose, failed dropping tables!", error)
        throw error
    }
}

async function createTables() {
    try {
        await client.query(`
        create table data (
            id serial primary key,
            key varchar(255),
            value varchar(255)
        )
        `)

    } catch (error) {
        console.log("oh nose! Couldn't create tables", error)
        throw error
    }
}

async function createInitialData() {
    try {
        await createData({
            key: "salinity",
            value: "5"
        })
        await createData({
            key: "acidity",
            value: "10"
        })

    } catch (error) {
        console.log("oh nose! Couldn't create data", error)
        throw error
    }
}

// call the function!!
async function rebuild() {
    try {
        client.connect()
        await dropTables()
        await createTables()
        await createInitialData()
    } catch (error) {
        console.log("oh nose! failed rebuilding database")
    }
}

rebuild().finally(() => client.end())