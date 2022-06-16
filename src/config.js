import { config } from "dotenv";

config();//Pone a disposicion la variables de entorno asignadas en .env

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || ""
};