require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

// Configuración de archivos estáticos (CSS, imágenes)
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal (esto lo moveremos a /routes más adelante)
// Replace the old app.get('/') with this:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
