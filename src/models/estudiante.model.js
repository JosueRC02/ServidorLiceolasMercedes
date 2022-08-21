import mongoose from 'mongoose';
const { Schema } = mongoose;

const EstudianteSchema = new mongoose.Schema({
    PrimerApellido: String,
    SegundoApellido: String,
    Ceduladeidentidad: String,
    Nombre: String,
    Nivel: String,
    Seccion: String,
    Adecuacion: String,
    Cursolectivo: String,
    RecibeReligión: String,
    RepiteCursoLectivo: String,
    CuentaconbeneficiodeBeca: String,
    Institucióndeprocedencia: String,
    PoseeDispositivosElectrónicos: String,
    TieneConectividad: String,
    Estado: String,
    Modalidad: String
});

export default mongoose.model("Alumnos", EstudianteSchema);