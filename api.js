import express from "express";
import { Routes } from "./routes/rutas.js";
import { Conexion } from "./database/conexion.js";
import cors from "cors";

export class Api {
    constructor() {
        this.app = express();
        this.ConectarDB();
        this.processPetition();
        this.port = 3000;
    }

    WakeServer() {
        this.app.listen(this.port, () => {
            console.log("servidor express encendido");
        });
    }

    ConectarDB() {
        Conexion();
    }

    processPetition() {
        // Configurar CORS para permitir solicitudes desde cualquier origen
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use("/", Routes);
    }
}
