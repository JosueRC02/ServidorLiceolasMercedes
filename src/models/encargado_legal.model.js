import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const EncargadoLegal = new mongoose.Schema({
    cedula: String,
    direccion: ObjectId,
    observaciones: String,
    escolaridad: String,
    estado_civil: String,
    vive_con_estudiante: String,
    relacion_estudiante: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("EncargadoLegal", EncargadoLegal);