import Direccion from "../models/direccion.model.js";



export const createDireccion = async (req, res, next) => {

    const newDireccion = new Direccion(req.body);

    try {
        const savedDireccion = await newDireccion.save();
        res.status(200).json(savedDireccion);
    } catch (err) {
        next(err);
    }
}

export const getDireccionId = async (req, res, next) => {

    try {
        const direccion = await Direccion.findById(req.params.id);
        res.status(200).json(direccion);
    } catch (err) {
        next(err);
    }
};


export const updateDireccion = async (req, res, next) => {

    try {
        const updateDireccion = await Direccion.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateDireccion);
    } catch (err) {
        next(err);
    }
}

export const deleteDireccion = async (req, res, next) => {

    try {
        await Direccion.findByIdAndDelete(req.params.id, { $set: req.body });
        res.status(200).json("Direccion eliminada correctamente.");
    } catch (err) {
        next(err);
    }
}


export const getDirecciones = async (req, res, next) => {
    try {
        const direcciones = await Direccion.find();
        res.status(200).json(direcciones);
    } catch (err) {
        next(err);
    }
}
