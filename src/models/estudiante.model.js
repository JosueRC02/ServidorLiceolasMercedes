import mongoose from 'mongoose';
const { Schema } = mongoose;

const EstudianteSchema = new mongoose.Schema({
    PrimerApellido: String,
    SegundoApellido: String,
    Ceduladeidentidad: String,
    Nombre: String,
    Nivel: String,
    Seccion: String,
    Adecuacion: Boolean,
    Cursolectivo: String,
    RecibeReligión: Boolean,
    RepiteCursoLectivo: Boolean,
    CuentaconbeneficiodeBeca: Boolean,
    Institucióndeprocedencia: String,
    PoseeDispositivosElectrónicos: Boolean,
    TieneConectividad: Boolean,
    Estado: Boolean,
    Modalidad: String
}, {
    versionKey: false
});

export default mongoose.model("Alumnos", EstudianteSchema);