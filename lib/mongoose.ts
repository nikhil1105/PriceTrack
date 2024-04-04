import mongoose, { Mongoose } from "mongoose";

let isconnected = false;

export const connecttoDB = async ()=>{
    mongoose.set('strictQuery',true)

    if (!process.env.MONGODB_URI) {
        return console.log('mongodb uri not defined');
        }
    if (isconnected) {
        return console.log('using existing database');
               
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        isconnected = true;
        console.log('connected to database');
        
    } catch (error:any) {
        console.log('error in connectDB :',error.message);
        
    }
}