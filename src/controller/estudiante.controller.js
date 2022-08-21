import ResponseError from "../response/responseError";
import Estudiante from "../models/estudiante.model.js";

export const getEstudianteId = async (req, res) => {

    try {
        const estudiante = await Estudiante.findById(req.params.id);
        res.status(200).json(estudiante);
    } catch (err) {
        res.status(500).json(err);
    }
};
