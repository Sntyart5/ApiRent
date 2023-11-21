import mongoose from "mongoose";
const Schema=mongoose.Schema
const rent=new Schema({
    rentnumber: { type: Number, required: true },
    username: { type: String, required: true },
    platenumber: { type: String, required: true },
    initialdate: { type: Date, required: true },
    finaldate: { type: Date, required: true },
    status: { type: Boolean, required: true },
    
})
export const modeloRent=mongoose.model("rents",rent)