import { modeloReturnCar } from "../models/modeloReturnCar.js";
export class ServicioReturnCar {
    constructor() {}
    async modificar(id, data) {
      let actualizar=await modeloReturnCar.findByIdAndUpdate(id, data);
      return actualizar.save()
    }
    async buscar() {
      let buscar = await modeloReturnCar.find();
      return buscar;
    }
    async registrar(data) {
      let nueva = new modeloReturnCar(data);
      return await nueva.save();
    }
    async eliminar(id) {
      let eliminar = await modeloReturnCar.findByIdAndDelete(id);
      return eliminar
    }
  }