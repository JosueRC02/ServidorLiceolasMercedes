import { getConnection } from "../database/ConexionDB";
import BaseResponse from "../response/baseResponse";
import ResponseError from "../response/responseError";

const postGrado = async (req, res) => {
    try {
        const { idGrado, Grado } = req.body;

        if (idGrado === undefined || Grado === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }else{
        //     const connection = await getConnection();
        //     await connection.query(`INSERT INTO Grado VALUES (${idGrado}, '${Grado}')`);
        //     res.status(200).json(new BaseResponse(
        //         "Grado", 
        //         "Se agregó grado academico"));
        }
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar un grado academico",
            error.message
        ))
    }
};

export const methods = {
    postGrado
};