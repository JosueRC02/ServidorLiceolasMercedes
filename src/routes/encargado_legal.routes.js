import { Router } from "express";
import { getEncargadoId, createEncargado, deleteEncargado, getEncargados, updateEncargado } from "./../controller/encargado_legal.controller";

const router = Router();

router.get("/:id", getEncargadoId);
router.post("/", createEncargado);
router.delete("/:id", deleteEncargado);
router.get("/", getEncargados);
router.put("/:id", updateEncargado);

export default router;