import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'


// app config
const app=express()
const port=4000

//middleware

app.use(express.json())
app.use(cors())

//db connection
connectDB();


//api end points
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${4000}`)
})

//mongodb+srv://dipen123:nepal123@cluster0.lqpld.mongodb.net/?



