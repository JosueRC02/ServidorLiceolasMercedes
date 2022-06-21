import { getConnection } from "../database/ConexionDB";
import BaseResponse from "../response/baseResponse";
import ResponseError from "../response/responseError";


const addReporte = async (req, res) => {
    try {
        const { idReporte, cod_Reporte, Reportecol } = req.body;

        if (idReporte === undefined || cod_Reporte === undefined || Reportecol === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }else{
            const connection = await getConnection();
            await connection.query(`INSERT INTO reporte VALUES (${idReporte}, '${cod_Reporte}', '${Reportecol}')`);
            res.status(200).json(new BaseResponse("Reporte", "Se agregó el reporte"));
        }
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar el reporte",
            error.message
        ))
    }
};

export const methods = {
    addReporte
};