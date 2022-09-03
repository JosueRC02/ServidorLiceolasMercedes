import { Router } from "express";
import { getEstudianteId, createEstudiante } from "./../controller/estudiante.controller";

const router = Router();

router.get("/:id", getEstudianteId);
router.post("/crearEstudiante", createEstudiante);

export default router;