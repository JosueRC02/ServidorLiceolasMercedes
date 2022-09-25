import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const PersonalSchema = new mongoose.Schema({
    nombre: String,
    cedula: {
        type: String,
        unique: true
    },
    primer_apellido: String,
    segundo_apellido: String,
    email: String,
    genero: String,
    sexo: String,
    puesto: String,
    horario_interno: String,
    guia: String,
    telefono: String,
    sindicato: String,
    nombramiento: String,
    direccion: String,
    semana_horario: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Personal", PersonalSchema);