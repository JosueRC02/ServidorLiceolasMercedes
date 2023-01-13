import Estudiante from "../models/estudiante.model.js";



export const createEstudiante = async (req, res, next) => {
    const newEstudiante = new Estudiante(req.body);

    try {
        const savedEstudiante = await newEstudiante.save();
        res.status(200).json(savedEstudiante);
    } catch (err) {
        next(err);
    }
}

export const getEstudianteId = async (req, res, next) => {

    try {
        const estudiante = await Estudiante.findById(req.params.id);
        res.status(200).json(estudiante);
    } catch (err) {
        next(err);
    }
};


export const updateEstudiante = async (req, res, next) => {

    try {
        const updateEstudiante = await Estudiante.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateEstudiante);
    } catch (err) {
        next(err);
    }
}

export const deleteEstudiante = async (req, res, next) => {

    try {
        await Estudiante.findByIdAndDelete(req.params.id, { $set: req.body });
        res.status(200).json("Estudiante eliminado correctamente.");
    } catch (err) {
        next(err);
    }
}


export const getEstudiantes = async (req, res, next) => {
    try {
        const estudiantes = await Estudiante.find();
        res.status(200).json(estudiantes);
    } catch (err) {
        next(err);
    }
}

export const findByCedula = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.find({ cedula_identidad: req.params.id });
        res.status(200).json(estudiante);
    } catch (err) {
        next(err);
    }
}

export const findBySeccion = async (req, res, next) => {
    try {
        const estudiantes = await Estudiante.find({ seccion: req.params.id });
        res.status(200).json(estudiantes);
    } catch (err) {
        next(err);
    }
}