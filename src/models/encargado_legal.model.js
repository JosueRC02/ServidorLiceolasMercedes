import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const EncargadoLegalSchema = new mongoose.Schema({
    cedula: {
        type: String,
        unique: true
    },
    direccion: String,
    observaciones: String,
    escolaridad: String,
    estado_civil: String,
    vive_con_estudiante: Boolean,
    relacion_estudiante: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("EncargadoLegal", EncargadoLegalSchema);