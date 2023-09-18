const express = require('express')
const appLoader = require('./app')
const config = require('./config/config')

async function startServer(){
    const app = express()
    await appLoader(app)

    const server = app.listen(config.port,()=>{
        console.log(`Server up on port ${config.port}`);
    })
}

startServer()