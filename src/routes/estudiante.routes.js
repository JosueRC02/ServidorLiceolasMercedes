import { Router } from "express";
import { getEstudianteId } from "./../controller/estudiante.controller";

const router = Router();

router.get("/:id", getEstudianteId);

export default router;