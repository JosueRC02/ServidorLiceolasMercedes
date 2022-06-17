import { getConnection } from "../database/ConexionDB";
import BaseResponse from "../response/baseResponse";
import ResponseError from "../response/responseError";

const postSeccion = async (req, res) => {
    try {
        const { idseccion , seccion } = req.body;

        if (idseccion === undefined || seccion === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }

        const connection = await getConnection();
        await connection.query(`INSERT INTO Grado VALUES (${idseccion}, '${seccion}')`);
        res.status(200).json(new BaseResponse(
            "Seccion", 
            "Se agregó una seccion"));
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar una seccion",
            error.message
        ))
    }
};

export const methods = {
    postSeccion
};