import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
const app =express()
dotenv.config()

const connect =async()=>{


try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to db")
  } catch (error) {
    throw error;
  }

};

mongoose.connection.on("disconnected", ()=>{
    console.log("db disconnected")
})

//middlewares

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, ()=>{
    connect()
    console.log("server is running on port 8800");
});