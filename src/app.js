import express from "express";
import morgan from "morgan";
import cors from "cors";
import reporteRoutes from "./routes/reporte.routes";
import estudianteRoutes from "./routes/estudiante.routes";
import personaRoutes from "./routes/persona.routes";
import adecuacionRoutes from "./routes/adecuacion.routes";
import gradoRoutes from "./routes/grado.routes";
import seccionRoutes from "./routes/seccion.routes";
import direccionRoutes from "./routes/direccion.routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

// Routes
app.use("/api/reporte", reporteRoutes);
app.use("/api/estudiante", estudianteRoutes);
app.use("/api/persona", personaRoutes); 
app.use("/api/adecuacion", adecuacionRoutes);
app.use("/api/grado", gradoRoutes);
app.use("/api/seccion", seccionRoutes);
app.use("/api/direccion", direccionRoutes);

export default app;