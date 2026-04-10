const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/pokemon/:nombre", async (req, res) => {
  const nombre = req.params.nombre;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
     if (!response.ok) {
    return res.status(404).json({
  error: "Pokémon no encontrado",
  imagen: "error-404.png"
});
  }
   
    const data = await response.json();
    res.json(data);
});


   
  app.use((req, res) => {
  res.status(500).send(`
    <h1>Error 500 - Error del servidor</h1>
    <img src="https://http.cat/500" alt="500 cat">
  `);
})
   


app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

