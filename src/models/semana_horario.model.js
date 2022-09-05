import { ObjectId } from 'mongodb';
import mongoose from 'mongosee';
const { Schema } = mongoose;

const ProtocoloSchema = new mongoose.Schema({
    cod_protocolo: String,
    encargado: ObjectId,
    alumno: ObjectId,
    responsable: ObjectId
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Protocolo", ProtocoloSchema);