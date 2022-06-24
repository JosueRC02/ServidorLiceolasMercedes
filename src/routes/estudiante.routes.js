import { Router } from "express";
import { methods as estudianteController } from "./../controller/estudiante.controller";

const router = Router();

router.get("/", estudianteController.getEstudiantes);
router.get("/:id", estudianteController.getEstudianteId);
router.post("/", estudianteController.postEstudiante);
router.put("/", estudianteController.updateEstudiante);
router.delete("/:id", estudianteController.deleteEstudiante);

export default router;