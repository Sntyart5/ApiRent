import { ServicioUser } from "../services/servicioUser.js";
export class controllerUser {

  constructor() {}
  async modificar (request, response) {
    let id = request.params.id;
    try {
          let data = new ServicioUser;
          let datosUpdate=request.body
          let datos=await data.modificar(id,datosUpdate)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa actualizado",
        datos:datosUpdate,
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }

  async buscar(request, response) {
    try {
      let data = new ServicioUser();
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa buscadas",
        datos: await data.buscar(),
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }

  async registrar(request, response) {
    try {
      let data = new ServicioUser();
      let datos = request.body;
      await data.registrar(datos)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa creada",
        datos:datos,
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
  async eliminar(request, response) {
    let id = request.params.id;
    try {
      let data = new ServicioUser();
      await data.eliminar(id,data)
      response.status(200).json({
        estado: true,
        mensaje: "peticion exitosa eliminada",
      });
    } catch (error) {
      console.error(error);
      response.status(400).json({
        estado: false,
        mensaje: "peticion fallada"+error,
        datos: null,
      });
    }
  }
}