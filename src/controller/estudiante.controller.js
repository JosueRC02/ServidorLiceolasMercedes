import { getConnection } from "../database/ConexionDB";
import BaseResponse from "../response/baseResponse";
import ResponseError from "../response/responseError";

const getEstudiantes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idPersonaje, Persona_idPersona, Recibe_Religion, modalidad, Adecuacion_idAdecuacion, Grado_idGrado, seccion_idseccion, tiene_internet, repitente, observaciones FROM Estudiante");
        res.status(200).json(new BaseResponse(
            "Estudiantes",
            "Estudiantes obtenidos",
            result
        ));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al obtener los estudiantes",
            error.message
        ));
    }
};

const getEstudianteId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idPersonaje, Persona_idPersona, Recibe_Religion, modalidad, Adecuacion_idAdecuacion, Grado_idGrado, seccion_idseccion, tiene_internet, repitente, observaciones FROM Estudiante WHERE idPersonaje = ?", id);
        res.status(200).json(new BaseResponse(
            "Estudiante",
            "Estudiante obtenido",
            result
        ));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al obtener el estudiante",
            error.message
        ));
    }
};

const postEstudiante = async (req, res) => {
    try {
        const { idPersonaje, Persona_idPersona, Recibe_Religion, modalidad, Adecuacion_idAdecuacion, Grado_idGrado, seccion_idseccion, tiene_internet, repitente, observaciones } = req.body;

        if (idPersonaje === undefined || Persona_idPersona === undefined || Recibe_Religion === undefined || modalidad === undefined || Adecuacion_idAdecuacion === undefined || Grado_idGrado === undefined || seccion_idseccion === undefined || tiene_internet === undefined || repitente === undefined || observaciones === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        } else {
            const connection = await getConnection();
            await connection.query(`INSERT INTO Estudiante VALUES (${idPersonaje}, ${Persona_idPersona}, '${Recibe_Religion}', '${modalidad}', ${Adecuacion_idAdecuacion}, ${Grado_idGrado}, ${seccion_idseccion}, '${tiene_internet}', '${repitente}', '${observaciones}')`);
            res.status(200).json(new BaseResponse(
                "Estudiante",
                "Se agregó el estudiante"));
        }

    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar el estudiante",
            error.message
        ))
    }
};

const updateEstudiante = async (req, res) => {
    try {
        const { idPersonaje, Persona_idPersona, Recibe_Religion, modalidad, Adecuacion_idAdecuacion, Grado_idGrado, seccion_idseccion, tiene_internet, repitente, observaciones } = req.body;

        if (idPersonaje === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        } else {
            const connection = await getConnection();
            const query = await connection.query(`SELECT idPersonaje, Persona_idPersona, Recibe_Religion, modalidad, Adecuacion_idAdecuacion, Grado_idGrado, seccion_idseccion, tiene_internet, repitente, observaciones FROM Estudiante WHERE idPersonaje = ${idPersonaje}`);
            const estudiante = query[0];

            idPersonaje = (idPersonaje === undefined) ? estudiante.idPersonaje : idPersonaje; // If de una sola línea se realiza la comparación ? true : false
            Persona_idPersona = (Persona_idPersona === undefined) ? estudiante.Persona_idPersona : Persona_idPersona;
            Recibe_Religion = (Recibe_Religion === undefined) ? estudiante.Recibe_Religion : Recibe_Religion;
            modalidad = (modalidad === undefined) ? estudiante.modalidad : modalidad;
            Adecuacion_idAdecuacion = (Adecuacion_idAdecuacion === undefined) ? estudiante.Adecuacion_idAdecuacion : Adecuacion_idAdecuacion;
            Grado_idGrado = (Grado_idGrado === undefined) ? estudiante.Grado_idGrado : Grado_idGrado;
            seccion_idseccion = (seccion_idseccion === undefined) ? estudiante.seccion_idseccion : seccion_idseccion;
            tiene_internet = (tiene_internet === undefined) ? estudiante.tiene_internet : tiene_internet;
            repitente = (repitente === undefined) ? estudiante.repitente : repitente;
            observaciones = (observaciones === undefined) ? estudiante.observaciones : observaciones;

            const result = await connection.query(`UPDATE Estudiante SET idPersonaje = ${idPersonaje}, Recibe_Religion = '${Recibe_Religion}', modalidad = '${modalidad}', Adecuacion_idAdecuacion = ${Adecuacion_idAdecuacion}, Grado_idGrado = ${Grado_idGrado}, seccion_idseccion = ${seccion_idseccion}, repitente = '${repitente}', observaciones = '${observaciones}', WHERE idPersonaje = ${idPersonaje};`);

            res.status(200).json(new BaseResponse(
                "Estudiante",
                "Se actualizó el estudiante",
                result));

        }
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
        const connection = await getConnection();
        const result = await connection.query(`DELETE FROM Estudiante WHERE idPersonaje = ${idPersonaje}`);
        res.status(200).json(new BaseResponse(
            "Estudiante",
            "Se eliminó el estudiante",
            result));
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