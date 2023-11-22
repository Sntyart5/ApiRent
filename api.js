import express from "express"
import { Routes } from "./routes/rutas.js";
import { Conexion } from "./database/conexion.js";
import cors from "cors"

export class Api{
constructor(){
    this.app=express()
    this.ConectarDB()
    this.processPetition()
    this.port=3000
}
WakeServer(){
    this.app.listen(this.port,()=>{
        console.log("servidor express encendido")
    })
}
ConectarDB(){
    Conexion()
}
processPetition() {
    // Configurar CORS solo para las rutas específicas que necesitas
    const corsOptions = {
        origin: 'http://localhost:19006', // Reemplaza esto con la URL de tu aplicación cliente
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 204,
    };

    this.app.use('/obtener', cors(corsOptions));
    this.app.use('/actualizar', cors(corsOptions));
    this.app.use('/eliminar', cors(corsOptions));
    this.app.use('/mandar', cors(corsOptions));

    this.app.use(express.json());
    this.app.use("/", Routes);
}

}