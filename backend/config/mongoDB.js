import mongoose from "mongoose";

const connectDB=async()=>{
    mongoose.connection.on("connected",()=>console.log("database connected"))
   
    await mongoose.connect(`mongodb+srv://wajeyash6:yash@cluster0.n61dv1j.mongodb.net/E-commerse?retryWrites=true&w=majority`)
}

export default connectDB   