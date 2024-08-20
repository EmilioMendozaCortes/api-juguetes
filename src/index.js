// Importación de dependencias
import app from "./app.js";
import "./database.js"

// Creación de rutas
app.get("/getAll", (req,res)=> {
    res.json({message:"Hola la maquina de Emilio"})
})

// Ejecución del servidor
app.listen(app.get("port"), ()=> {
    console.log("Server on port", app.get("port"));
});