import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './.env'})
import connectDB from './config/db.js';
import urlRouter from './routes/urls.routes.js'
import indexRouter from './routes/index.js'

const app = express();

connectDB();

//Body Praser
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

//routes
app.use('/', indexRouter)
app.use('/api', urlRouter);

//Server Setup
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})