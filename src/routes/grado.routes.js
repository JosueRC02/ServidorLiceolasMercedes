import { Router } from "express";
import { methods as gradoController } from "./../controller/grado.controller";

const router = Router();

router.post("/", gradoController.postGrado);

export default router;