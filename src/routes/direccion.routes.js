import { Router } from "express";
import { getDireccionId, createDireccion, deleteDireccion, getDirecciones, updateDireccion } from "./../controller/direccion.controller";

const router = Router();

router.get("/:id", getDireccionId);
router.post("/", createDireccion);
router.delete("/:id", deleteDireccion);
router.get("/", getDirecciones);
router.put("/:id", updateDireccion);

export default router;