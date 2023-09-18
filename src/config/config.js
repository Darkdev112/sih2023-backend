const path = require('path')
const dotenv = require('dotenv').config({path : path.join(__dirname, '../../.env')})

if(dotenv.error){
    throw new Error('No .env file found')
}

module.exports = {
    mode : process.env.NODE_ENV,
    port : parseInt(process.env.PORT, 10),
} 