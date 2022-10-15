import Encargado from "../models/encargado_legal.model.js";


export const createEncargado = async (req, res, next) => {

    const newEncargado = new Encargado(req.body);

    try {
        const savedEncargado = await newEncargado.save();
        res.status(200).json(savedEncargado);
    } catch (err) {
        next(err);
    }
}

export const getEncargadoId = async (req, res, next) => {

    try {
        const encargado = await Encargado.findById(req.params.id);
        res.status(200).json(encargado);
    } catch (err) {
        next(err);
    }
};


export const updateEncargado = async (req, res, next) => {

    try {
        const updateEncargado = await Encargado.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateEncargado);
    } catch (err) {
        next(err);
    }
}

export const deleteEncargado = async (req, res, next) => {

    try {
        await Encargado.findByIdAndDelete(req.params.id, { $set: req.body });
        res.status(200).json("Direccion eliminada correctamente.");
    } catch (err) {
        next(err);
    }
}


export const getEncargados = async (req, res, next) => {
    try {
        const encargados = await Encargado.find();
        res.status(200).json(encargados);
    } catch (err) {
        next(err);
    }
}
