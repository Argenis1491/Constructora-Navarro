import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import formRoutes from "./routes/formRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";
import path from "path";
import { fileURLToPath } from "url";



dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Rutas
app.use("/api/form", formRoutes);
app.use("/api/data", dataRoutes);
app.get("*", (req, res) => {
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Servidor backend corriendo correctamente");
  console.log(`Escuchando en http://localhost:${PORT}`);
});
