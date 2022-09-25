import { ObjectId } from 'mongodb';
import mongoose from 'mongosee';
const { Schema } = mongoose;

const SemanaHorarioSchema = new mongoose.Schema({

}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("SemanaHorario", SemanaHorarioSchema);