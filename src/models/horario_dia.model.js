import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const HorarioDiaSchema = new mongoose.Schema({
    dia: String,
    entrada: String,
    salida: String,
    semana_horario: ObjectId
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("HorarioDia", HorarioDiaSchema);