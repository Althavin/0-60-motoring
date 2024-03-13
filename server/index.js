require('dotenv').config()

const express = require('express')
const app = express()

//rest of packages
const rateLimiter  = require("express-rate-limit")
const helmet = require('helmet')
const cors = require('cors')
const mongoSanitize = require("express-mongo-sanitize")





//database
const connectDB = require('./db')


app.set('trust proxy', 1); // trust first proxy

app.use(helmet());

app.use(rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
}))

app.use(cors({
    origin: process.env.CLIENT_SIDE_URL

}))

app.use(mongoSanitize());

app.use(express.json());


app.use(express.urlencoded({extended: true}))

app.use('/api/v1', require('./router'))


const port = process.env.PORT || 4000


const start = async () => {
    try {
       await connectDB(process.env.MONGO_URI).then(() => {
              console.log("Database connected") 
         })
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()