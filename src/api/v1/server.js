const express = require('express')

const app = express()

require('dotenv').config()

const helmet = require('helmet')
const morgan = require('morgan')
const route = require('./routes/index.route')
const database = require('./config/database')

const PORT = process.env.PORT || 5000
app.use(helmet())
app.use(morgan('common'))
//connect db
database.connect()
// database.on()
// database.disconnect()

app.get('/',(req, res) => {
    res.send("alo123")
})

route(app)
app.use( (req , res , next)=> {
    res.json({
        status : 404 ,
        message : "Not Found!",
        links: {
            'docs' : ""
        }
    })
})
app.use((err , req , res , next)=> {
    res.status(err.status || 500)
    res.json({
        status : err.status || 500,
        message : err.message
    })
})

app.listen(PORT , () => {
    console.log(`Server is running at ${PORT}`)
})

