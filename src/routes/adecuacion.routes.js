import { Router } from "express";
import { methods as adecuacionController } from "./../controller/adecuacion.controller";

const router = Router();

router.post("/", adecuacionController.postAdecuacion);

export default router;