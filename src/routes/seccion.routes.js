import { Router } from "express";
import { methods as seccionController } from "./../controller/seccion.controller";

const router = Router();

router.post("/", seccionController.postSeccion);

export default router;