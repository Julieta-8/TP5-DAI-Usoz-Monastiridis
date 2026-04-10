async function buscar() {
  const nombre = document.getElementById("Nombre").value.toLowerCase();
  const contenedor = document.getElementById("resultado");

  contenedor.innerHTML = "Cargando...";

  
 const res = await fetch(`/pokemon/${nombre}`);
const data = await res.json();

if (!res.ok) {
  contenedor.innerHTML = `<p>${data.error}</p>
   <img src="${data.imagen}">`;
  return;
}
   const w = data.weight
   
   const h = data.height
    contenedor.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.sprites.front_default}"   >
      <p>Tipos: ${data.types.map(t => t.type.name).join(", ")}</p>
       <p>${data.weight}</p>
<p>${data.height}</p>
      `;

   
  
}

