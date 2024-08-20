import mongoose from "mongoose";

mongoose.connect("mongodb+srv://emites:1234@cluster1.bbosk95.mongodb.net/toy_store_db?retryWrites=true&w=majority&appName=Cluster1")
    .then(()=> console.log("Connected to MongoDB"))
    .catch((err)=> console.error(err));

export default mongoose;