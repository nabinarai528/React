import express, { urlencoded } from 'express';
import productRoutes from './routes/productRoutes.js'
import connectDb from './config/database.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDb()

app.use('/product',productRoutes)

app.listen(4000, () => {
    console.log("port started successfully")
})