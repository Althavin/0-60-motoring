require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

//rest of packages
const rateLimiter  = require("express-rate-limit")
const helmet = require('helmet')
const cors = require('cors')
const mongoSanitize = require("express-mongo-sanitize")
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')






//database
const connectDB = require('./database/db')

//routers
const authRoute = require('./routes/authRouter')
const blogRoute = require('./routes/blogRouter')
const youtubeRoute = require('./routes/youtubeRouter')


const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/error-handler')


app.set('trust proxy', 1); // trust first proxy

app.use(helmet());

app.use(rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
}))

app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [process.env.CLIENT_SIDE_URL, process.env.CLIENT_SIDE_URL_2];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true
}))

app.use(mongoSanitize());
app.use(morgan('short'))
app.use(cookieParser(process.env.JWT_SECRET));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(express.json());


app.use(express.urlencoded({extended: true}))

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/blogs", blogRoute)
app.use("/api/v1/youtube", youtubeRoute)




app.use(notFound)
app.use(errorHandler)

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