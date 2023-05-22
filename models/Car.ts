import {Document,Schema,model} from "mongoose";


export interface Car extends Document{
    brand:string;
    model:string;
    year:number;
    isActive:boolean;
}

// Araba şeması oluşturma
const carSchema = new Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    year: {type: Number, required: true},
    isActive: {type: Boolean, default: false}
});
// Modülü dışa aktarma
export const carModel = model<Car>('Car', carSchema);
