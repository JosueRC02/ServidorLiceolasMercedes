import { Router } from "express";
import { getEstudianteId, createEstudiante, deleteEstudiante, getEstudiantes, updateEstudiante } from "./../controller/estudiante.controller";

const router = Router();

router.get("/:id", getEstudianteId);
router.post("/", createEstudiante);
router.delete("/:id", deleteEstudiante);
router.get("/", getEstudiantes);
router.put("/:id", updateEstudiante);

export default router;