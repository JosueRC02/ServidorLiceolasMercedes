import Personal from "../models/personal.model";



export const createPersonal = async (req, res, next) => {

    const newPersonal = new Personal(req.body);

    try {
        const savedPersonal = await newPersonal.save();
        res.status(200).json(savedPersonal);
    } catch (err) {
        next(err);
    }
}

export const getPersonalId = async (req, res, next) => {

    try {
        const personal = await Personal.findById(req.params.id);
        res.status(200).json(personal);
    } catch (err) {
        next(err);
    }
};


export const updatePersonal = async (req, res, next) => {

    try {
        const updatePersonal = await Personal.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatePersonal);
    } catch (err) {
        next(err);
    }
}

export const deletePersonal = async (req, res, next) => {

    try {
        await Personal.findByIdAndDelete(req.params.id, { $set: req.body });
        res.status(200).json("Personal eliminado correctamente.");
    } catch (err) {
        next(err);
    }
}


export const getPersonal = async (req, res, next) => {
    try {
        const personales = await Personal.find();
        res.status(200).json(personales);
    } catch (err) {
        next(err);
    }
}
