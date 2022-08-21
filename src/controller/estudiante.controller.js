import ResponseError from "../response/responseError";

const getEstudiantes = async (req, res) => {
    try {
        const { cedula } = req.body;
        // const connection = await getConnection();
        // const result = await connection.query("SELECT e.*, p.* FROM Estudiante e, Persona p WHERE p.cedula = ? and p.idPersona = e.Persona_idPersona", cedula);
        // res.status(200).json(new BaseResponse(
        //     "Estudiantes",
        //     "Estudiantes obtenidos",
        //     result
        //     ));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al obtener los estudiantes",
            error.message
        ));
    }
};

const getEstudianteId = async (req, res) => {
    try {
        const { cedula } = req.body.cedula;
        // const connection = await getConnection();
        // const result = await connection.query("SELECT e.idPersonaje, e.Persona_idPersona, e.Recibe_Religion, e.modalidad, e.Adecuacion_idAdecuacion, e.Grado_idGrado, e.seccion_idseccion, e.tiene_internet, e.repitente, e.observaciones, p.cedula, p.Nombre FROM Estudiante e, Persona p WHERE p.cedula = ? and p.idPersona = e.Persona_idPersona", cedula);
        // res.status(200).json(new BaseResponse(
        //     "Estudiante",
        //     "Estudiante obtenido",
        //     result
        //     ));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al obtener el estudiante",
            error.message
        ));
    }
};

const postEstudiante = async (req, res) => {
    try {
        // const { idPersonaje, Persona_idPersona, Recibe_Religion, modalidad, Adecuacion_idAdecuacion, Grado_idGrado, seccion_idseccion, tiene_internet, repitente, observaciones } = req.body;

        // if (idPersonaje === undefined || Persona_idPersona === undefined || Recibe_Religion === undefined || modalidad === undefined || Adecuacion_idAdecuacion === undefined || Grado_idGrado === undefined || seccion_idseccion === undefined || tiene_internet === undefined || repitente === undefined || observaciones === undefined) {
        //     res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        // }else{
        //     const connection = await getConnection();
        //     await connection.query(`INSERT INTO Estudiante VALUES (${idPersonaje}, ${Persona_idPersona}, '${Recibe_Religion}', '${modalidad}', ${Adecuacion_idAdecuacion}, ${Grado_idGrado}, ${seccion_idseccion}, '${tiene_internet}', '${repitente}', '${observaciones}')`);
        //     res.status(200).json(new BaseResponse(
        //         "Estudiante", 
        //         "Se agregó el estudiante"));
        // }

    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar el estudiante",
            error.message
        ))
    }
};

const updateEstudiante = async (req, res) => {
    try {
      
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al actualizar el estudiante",
            error.message
        ))
    }
};

const deleteEstudiante = async (req, res) => {
    try {
        const { idPersonaje } = req.params;
        // const connection = await getConnection();
        // const result = await connection.query(`DELETE FROM Estudiante WHERE idPersonaje = ${idPersonaje}`);
        // res.status(200).json(new BaseResponse(
        //     "Estudiante", 
        //     "Se eliminó el estudiante",
        //     result));
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al eliminar el estudiante",
            error.message
        ))
    }
};

export const methods = {
    getEstudiantes,
    getEstudianteId,
    postEstudiante,
    updateEstudiante,
    deleteEstudiante
};