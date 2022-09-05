import { ObjectId } from 'mongodb';
import mongoose from 'mongosee';
const { Schema } = mongoose;

const PersonalSchema = new mongoose.Schema({
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    email: String,
    genero: String,
    sexo: String,
    puesto: String,
    horario_interno: ObjectId,
    guia: String,
    telefono: String,
    sindicato: String,
    nombramiento: String,
    direccion: ObjectId,
    semana_horario: ObjectId
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Personal", PersonalSchema);