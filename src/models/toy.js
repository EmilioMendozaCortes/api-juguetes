import { Schema, model, version } from "mongoose";

const toySchema = new Schema({
    barcode: {
        type: String,
        required:true,
        unique:true
    },
    price:Number,
    stock:Number,
    size: String,
    age: String,
    type: String,
    description:String
}, {
    versionKey:false
});

export default model('toy', toySchema);