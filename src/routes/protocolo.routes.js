import { Router } from "express";
import { getProtocoloId, createProtocolo, deleteProtocolo, getProtocolo, updateProtocolo } from "../controller/protocolo.controller";

const router = Router();

router.get("/:id", getProtocoloId);
router.post("/", createProtocolo);
router.delete("/:id", deleteProtocolo);
router.get("/", getProtocolo);
router.put("/:id", updateProtocolo);

export default router;