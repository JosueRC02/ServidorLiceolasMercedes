import { Router } from "express";
import { methods as reporteController } from "./../controller/reporte.controller";

const router = Router();

router.post("/", reporteController.addReporte);

export default router;