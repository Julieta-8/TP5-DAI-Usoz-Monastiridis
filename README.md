# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



-Gracias al materia de fetch de facilitó la implementación de este, sin embrago, las dificultades vienen desde react 

"# TP5-DAI-Usoz-Monastiridis" 


//Dificultades: Aparte de establecer una estructura, se nos dificultò establecer un mensaje de error ya que el codigo seguìa teniendo el mensaje "cargando" porque, apesar de no encontrar el pokemon, el codigo estaba establecido para siempre dar el ok. Una vez solucionado, quisimos insertar imagenes que coincidieran con la respuesta y integrar un diseño que coincida con la estètica
//Decisiones: Como decisiones, se optó por utilizar un backend intermedio para manejar las solicitudes y los posibles errores, devolver las respuestas en formato JSON para facilitar su procesamiento
//Estructura: El proyecto se estructura en un backend desarrollado con Node y Express, encargado de gestionar las rutas y consumir la API externa utilizando async/await, y un frontend construido con HTML, CSS y JavaScript