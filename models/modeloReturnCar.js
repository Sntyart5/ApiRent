import mongoose from "mongoose";
const Schema=mongoose.Schema
const returne=new Schema({
    rentnumber: { type: Number, required: true },
    returnnumber: { type: Number, required: true },
    returndate: { type: Date, required: true },
})
export const modeloReturnCar=mongoose.model("returns",returne)