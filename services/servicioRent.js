import { modeloRent } from "../models/modeloRent.js";
export class ServicioRent {
    constructor() {}
    async modificar(id, data) {
      let actualizar=await modeloRent.findByIdAndUpdate(id, data);
      return actualizar.save()
    }
    async buscar() {
      let buscar = await modeloRent.find();
      return buscar;
    }
    async registrar(data) {
      let nueva = new modeloRent(data);
      return await nueva.save();
    }
    async eliminar(id) {
      let eliminar = await modeloRent.findByIdAndDelete(id);
      return eliminar
    }
  }