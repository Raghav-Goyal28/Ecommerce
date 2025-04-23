//ehVcR9R5Tizg9ubo
import express from 'express'
import mongoose from 'mongoose';

import bodyParser from "express"
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/Cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from "./Routes/payment.js"
import cors from "cors"

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin:true,
    methods:[ "GET","POST","PUT","DELETE"],
    credentials:true 
  }))

app.use('/api/user',userRouter);
app.use('/api/product',productRouter);
app.use('/api/cart',cartRouter);
app.use('/api/address',addressRouter)
app.use('/api/payment',paymentRouter)

mongoose.connect(
    "mongodb+srv://rg773265:ehVcR9R5Tizg9ubo@cluster0.uez4o.mongodb.net/",{
      dbName:"E-Commerce"
    }
  ).then(()=>console.log("MongoDB Connected Succssfully...!")).catch((err)=>console.log(err));
  
  const port = 1000;
  app.listen(port,()=>console.log(`Server is running on port ${port}`))