import { Router } from "express";
import { methods as personaController } from "./../controller/persona.controller";

const router = Router();

router.get("/", personaController.getPersonas);
router.get("/:id", personaController.getPersonasId);
router.post("/", personaController.postPersona);
router.put("/", personaController.updatePersona);
router.delete("/:id", personaController.deletePersona);

export default router;