import { getConnection } from "../database/ConexionDB";
import BaseResponse from "../response/baseResponse";
import ResponseError from "../response/responseError";

const postAdecuacion = async (req, res) => {
    try {
        const { idAdecuacion, Tipo_adecuacion } = req.body;

        if (idAdecuacion === undefined || Tipo_adecuacion === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }

        const connection = await getConnection();
        await connection.query(`INSERT INTO Adecuacion VALUES (${idAdecuacion}, '${Tipo_adecuacion}')`);
        res.status(200).json(new BaseResponse(
            "Adecuacion", 
            "Se agregó una adecuacion"));
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar una adecuacion",
            error.message
        ))
    }
};

export const methods = {
    postAdecuacion
};