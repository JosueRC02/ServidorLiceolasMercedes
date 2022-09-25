import Protocolo from "../models/protocolo.model";



export const createProtocolo = async (req, res, next) => {

    const newProtocolo = new Protocolo(req.body);

    try {
        const savedProtocolo = await newProtocolo.save();
        res.status(200).json(savedProtocolo);
    } catch (err) {
        next(err);
    }
}

export const getProtocoloId = async (req, res, next) => {

    try {
        const protocolo = await Protocolo.findById(req.params.id);
        res.status(200).json(protocolo);
    } catch (err) {
        next(err);
    }
};


export const updateProtocolo = async (req, res, next) => {

    try {
        const updateProtocolo = await Protocolo.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateProtocolo);
    } catch (err) {
        next(err);
    }
}

export const deleteProtocolo = async (req, res, next) => {

    try {
        await Protocolo.findByIdAndDelete(req.params.id, { $set: req.body });
        res.status(200).json("Protocolo eliminado correctamente.");
    } catch (err) {
        next(err);
    }
}


export const getProtocolo = async (req, res, next) => {
    try {
        const protocolos = await Protocolo.find();
        res.status(200).json(protocolos);
    } catch (err) {
        next(err);
    }
}
