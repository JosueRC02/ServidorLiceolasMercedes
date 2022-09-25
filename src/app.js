import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import estudiantesRoutes from "./routes/estudiante.routes.js";
import direccionRoutes from "./routes/direccion.routes.js";
import encargadoRoutes from "./routes/encargado_legal.routes.js";
import horarioDia from "./routes/horario_dia.routes.js";
import personal from "./routes/personal.routes.js";
import protocolo from "./routes/protocolo.routes";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/api/estudiante", estudiantesRoutes);
app.use("/api/direccion", direccionRoutes);
app.use("/api/encargado", encargadoRoutes);
app.use("/api/horarioDia", horarioDia);
app.use("/api/personal", personal);
app.use("/api/protocolo", protocolo);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});

export default app;