import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProtocoloSchema = new mongoose.Schema({
    cod_protocolo: {
        type: String,
        unique: true
    },
    encargado: String,
    alumno: String,
    responsable: String
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Protocolo", ProtocoloSchema);