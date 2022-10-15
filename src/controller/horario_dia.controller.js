import HorarioDia from "../models/horario_dia.model";



export const createHorarioDia = async (req, res, next) => {

    const newHorarioDia = new HorarioDia(req.body);

    try {
        const savedHorarioDia = await newHorarioDia.save();
        res.status(200).json(savedHorarioDia);
    } catch (err) {
        next(err);
    }
}

export const getHorarioDiaId = async (req, res, next) => {

    try {
        const horarioDia = await HorarioDia.findById(req.params.id);
        res.status(200).json(horarioDia);
    } catch (err) {
        next(err);
    }
};


export const updateHorarioDia = async (req, res, next) => {

    try {
        const updateHorarioDia = await HorarioDia.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHorarioDia);
    } catch (err) {
        next(err);
    }
}

export const deleteHorarioDia = async (req, res, next) => {

    try {
        await HorarioDia.findByIdAndDelete(req.params.id, { $set: req.body });
        res.status(200).json("Horario dia eliminado correctamente.");
    } catch (err) {
        next(err);
    }
}


export const getHorariosDia = async (req, res, next) => {
    try {
        const horariosDia = await HorarioDia.find();
        res.status(200).json(horariosDia);
    } catch (err) {
        next(err);
    }
}
