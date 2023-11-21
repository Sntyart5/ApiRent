import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv()
export async function Conexion(){
try{
    await mongoose.connect(process.env.DATABASE)
    console.log("conexion con la base de datos exitosa")
}catch (error){
    console.log(error)
}
}