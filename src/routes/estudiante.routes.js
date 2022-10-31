import { Router } from "express";
import { getEstudianteId, createEstudiante, deleteEstudiante, getEstudiantes, updateEstudiante, findBySeccion, findByCedula } from "./../controller/estudiante.controller";

const router = Router();

router.get("/:id", getEstudianteId);
router.post("/", createEstudiante);
router.delete("/:id", deleteEstudiante);
router.get("/", getEstudiantes);
router.put("/:id", updateEstudiante);
router.get("/cedula/:id", findByCedula);
router.get("/seccion/:id", findBySeccion);

export default router;