import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const EstudianteSchema = new mongoose.Schema({
    nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    cedula_identidad: {
        type: String,
        unique: true
    },
    fecha_nacimiento: Date,
    edad: Number,
    nacionalidad: String,
    genero: String,
    sexo: String,
    direccion: String,
    nivel: String,
    seccion: String,
    adecuacion: Boolean,
    curso_lectivo: String,
    recibe_religion: Boolean,
    beca_IMAS: Boolean,
    estado: Boolean,
    telefono: String,
    correo_personal: String,
    correo_mep: String,
    numero1: String,
    numero2: String,
    numero3: String,
    alergia: String,
    tipo_sangre: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Estudiante", EstudianteSchema);