import { modeloUser } from "../models/modeloUser.js";
export class ServicioUser {
    constructor() {}
    async modificar(id, data) {
      let actualizar=await modeloUser.findByIdAndUpdate(id, data);
      return actualizar.save()
    }
    async buscar() {
      let buscar = await modeloUser.find();
      return buscar;
    }
    async registrar(data) {
      let nueva = new modeloUser(data);
      return await nueva.save();
    }
    async eliminar(id) {
      let eliminar = await modeloUser.findByIdAndDelete(id);
      return eliminar
    }
  }