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
