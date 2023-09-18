
const appLoader = async(app) => {
    app.get('/', (req,res) => {
        res.status(200).end()
    })
    app.head('/',(req,res) => {
        res.status(200).end()
    })
}

module.exports = appLoader