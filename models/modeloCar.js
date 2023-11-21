import mongoose from "mongoose";
const Schema=mongoose.Schema
const car=new Schema({
    platenumber: { type: String, required: true },
    brand: { type: String, required: true },
    state: { type: Number, required: true },
    dailyvalue: { type: Number, required: true },
})
export const modeloCar=mongoose.model("cars",car)