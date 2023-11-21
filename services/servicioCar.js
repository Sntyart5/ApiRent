import { modeloCar } from "../models/modeloCar.js";
export class ServicioCar {
    constructor() {}
    async modificar(id, data) {
      let actualizar=await modeloCar.findByIdAndUpdate(id, data);
      return actualizar.save()
    }
    async buscar() {
      let buscar = await modeloCar.find();
      return buscar;
    }
    async registrar(data) {
      let nueva = new modeloCar(data);
      return await nueva.save();
    }
    async eliminar(id) {
      let eliminar = await modeloCar.findByIdAndDelete(id);
      return eliminar
    }
  }