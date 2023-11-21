import mongoose from "mongoose";
const Schema=mongoose.Schema
const user=new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true },
    reservedword: { type: String, required: true },
})
export const modeloUser=mongoose.model("users",user)