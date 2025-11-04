// routes/formRoutes.js

import express from "express";
import { sendFormulario } from "../controllers/formController.js";

const router = express.Router();

// Ruta para probar envío de formulario
router.post("/send", sendFormulario);

export default router;
