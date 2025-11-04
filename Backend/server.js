import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from "./routes/formRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";



dotenv.config();

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Rutas
app.use("/api/form", formRoutes);
app.use("/api/data", dataRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Servidor backend corriendo correctamente");
  console.log(`Escuchando en http://localhost:${PORT}`);
});
