import app from './app'
import { config } from "dotenv";
import mongoose from 'mongoose';

config();

const connection = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@sandbox.1g67y.mongodb.net/Liceo_las_Mercedes?retryWrites=true&w=majority`

const connect = async () => {
    try {
        await mongoose.connect(connection);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error;
    }
};

const main = () => {
    app.listen(process.env.PORT);
    console.log('Server listen on port', process.env.PORT);
    connect();
};

main();