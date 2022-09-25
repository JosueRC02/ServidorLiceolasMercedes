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
    direccion: String,
    nivel: String,
    seccion: String,
    adecuacion: Boolean,
    curso_lectivo: String,
    recibe_religion: Boolean,
    repitente: Boolean,
    beca_transporte: Boolean,
    beca_comedor: Boolean,
    beca_IMAS: Boolean,
    institucion_procedencia: String,
    posee_disp_electronicos: Boolean,
    tiene_conectividad: Boolean,
    estado: Boolean,
    modalidad: String,
    encargado_legal: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Estudiante", EstudianteSchema);