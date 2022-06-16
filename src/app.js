import express from "express";
import morgan from "morgan";
import cors from "cors";
import reporteRoutes from "./routes/reporte.routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

// Routes
app.use("/api/reporte", reporteRoutes);

export default app;