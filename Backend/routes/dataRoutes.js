import express from "express";
const router = express.Router();

// Datos para menús desplegables
router.get("/opciones", (req, res) => {
  const data = {
    tiposProyecto: [
      "Casa",
      "Quincho",
      "Terraza",
      "Oficina",
      "Cocina",
      "Remodelación",
      "Ampliación",
      "Electricidad",
      "Fontanería",
      "Gasfitería"
    ],
    comunas: [
      "Temuco",
      "Padre Las Casas",
      "Vilcún",
      "Lautaro",
      "Freire",
      "Gorbea",
      "Pitrufquén",
      "Villarrica",
      "Pucón",
      "Nueva Imperial",
      "Carahue",
      "Cunco",
      "Melipeuco",
      "Toltén",
      "Curarrehue"
    ]
  };

  console.log("📋 Datos enviados a frontend:", data);
  res.json(data);
});

export default router;
