import mongoose from 'mongoose';
const { Schema } = mongoose;

const DireccionSchema = new mongoose.Schema({
    distrito: String,
    barrio: String,
    descripcion_ubic: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Direccion", DireccionSchema);