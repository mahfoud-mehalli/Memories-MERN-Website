import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js '

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://mahfoudmehalli12345:mahfoudmehalli12345@memories-mern-website.dhaqibp.mongodb.net/?retryWrites=true&w=majority&appName=Memories-MERN-Website'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
 



// https://www.mongodb.com/cloud/atlas