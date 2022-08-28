import express from "express";
import morgan from "morgan";
import cors from "cors";
import estudiantesRoutes from "./routes/estudiante.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

// Routes
app.use("/api/estudiantes", estudiantesRoutes);

export default app;