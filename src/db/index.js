import mongoose from "mongoose";

import { DB_NAME } from "../contants.js";


const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connected to MongoDB !!: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB CONNECTION FAILED", error)
        throw error
    }
}

export default connectDB;