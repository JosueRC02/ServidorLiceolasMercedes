import app from './app'
import { config } from "dotenv";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import './database/ConexionDB';


mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected");
})

app.listen(process.env.PORT, () => {
    console.log("Connected to backed.");
});
