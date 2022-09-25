import { Router } from "express";
import { getHorarioDiaId, createHorarioDia, deleteHorarioDia, getHorariosDia, updateHorarioDia } from "./../controller/horario_dia.controller";

const router = Router();

router.get("/:id", getHorarioDiaId);
router.post("/", createHorarioDia);
router.delete("/:id", deleteHorarioDia);
router.get("/", getHorariosDia);
router.put("/:id", updateHorarioDia);

export default router;