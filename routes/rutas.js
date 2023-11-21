import express from "express"
import { controllerCar } from "../controllers/controllerCar.js"
import { controllerRent } from "../controllers/controllerRent.js"
import { controllerReturnCar } from "../controllers/controllerReturnCar.js"
import { controllerUser } from "../controllers/controllerUser.js"
let controller1=new controllerCar()
let controller2=new controllerRent()
let controller3=new controllerReturnCar()
let controller4=new controllerUser()

export const Routes=express.Router()
//Car routes
Routes.get("/obtener/Cars",controller1.buscar)
Routes.put("/actualizar/Car/:id",controller1.modificar)
Routes.delete("/eliminar/Car/:id",controller1.eliminar)
Routes.post("/mandar/Car",controller1.registrar)
//Rent routes
Routes.get("/obtener/Rents",controller2.buscar)
Routes.put("/actualizar/Rent/:id",controller2.modificar)
Routes.delete("/eliminar/Rent/:id",controller2.eliminar)
Routes.post("/mandar/Rent",controller2.registrar)
//ReturnCar routes
Routes.get("/obtener/Returns",controller3.buscar)
Routes.put("/actualizar/Return/:id",controller3.modificar)
Routes.delete("/eliminar/Return/:id",controller3.eliminar)
Routes.post("/mandar/Return",controller3.registrar)
//User routes
Routes.get("/obtener/Users",controller4.buscar)
Routes.put("/actualizar/User/:id",controller4.modificar)
Routes.delete("/eliminar/User/:id",controller4.eliminar)
Routes.post("/mandar/User",controller4.registrar)