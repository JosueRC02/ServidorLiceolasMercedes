import { Router } from "express";
import { getPersonalId, createPersonal, deletePersonal, getPersonal, updatePersonal } from "../controller/personal.controller";

const router = Router();

router.get("/:id", getPersonalId);
router.post("/", createPersonal);
router.delete("/:id", deletePersonal);
router.get("/", getPersonal);
router.put("/:id", updatePersonal);

export default router;