import ResponseError from "../response/responseError";

const postDireccion = async (req, res) => {
    try {
        const { id_Direccion, Ubicacion_descrip, canton, provincia, distrito, barrio } = req.body;

        if (id_Direccion === undefined || Ubicacion_descrip === undefined || canton === undefined || provincia === undefined || distrito === undefined || barrio === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }else{
            // const connection = await getConnection();
            // await connection.query(`INSERT INTO Direccion VALUES (${id_Direccion}, '${Ubicacion_descrip}', '${canton}', '${provincia}', '${distrito}', '${barrio}')`);
            // res.status(200).json(new BaseResponse(
            //     "Direccion", 
            //     "Se agregó una direccion"));
        }
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar una direccion",
            error.message
        ))
    }
};

export const methods = {
    postDireccion
};