import { Router } from "express";
import { methods as direccionController } from "./../controller/direccion.controller";

const router = Router();

router.post("/", direccionController.postDireccion);

export default router;