import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting server due to uncaught execption`);
    process.exit(1);
  })

app.use(express.json());
app.use(cors());

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000

const server = app.listen(PORT,() =>{
    console.log(`Server is Running ${process.env.DEV_MODE} mode on port ${PORT}`)
})

// Unhandled Promise Rejection
process.on('unhandledRejection',err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shuting down the server due to unhandled Rejection`);
    server.close(()=>{
      process.exit(1);
    })
  });

