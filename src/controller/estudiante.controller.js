import { getConnection } from "../database/ConexionDB";
import BaseResponse from "../response/baseResponse";
import ResponseError from "../response/responseError";

const getEstudiantes = async (req, res) => {
    try {
        const { cedula } = req.body;
        const connection = await getConnection();
        const result = await connection.query("SELECT e.*, p.* FROM Estudiante e, Persona p WHERE p.cedula = ? and p.idPersona = e.Persona_idPersona", cedula);
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
        const { cedula } = req.body.cedula;
        const connection = await getConnection();
        const result = await connection.query("SELECT e.idPersonaje, e.Persona_idPersona, e.Recibe_Religion, e.modalidad, e.Adecuacion_idAdecuacion, e.Grado_idGrado, e.seccion_idseccion, e.tiene_internet, e.repitente, e.observaciones, p.cedula, p.Nombre FROM Estudiante e, Persona p WHERE p.cedula = ? and p.idPersona = e.Persona_idPersona", cedula);
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
        }else{
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
        let { idPersonaje, Persona_idPersona, Recibe_Religion, modalidad, Adecuacion_idAdecuacion, Grado_idGrado, seccion_idseccion, tiene_internet, repitente, observaciones, idPersona, Nombre, Apel1, Apel2, cedula, email, Roll_idRol, contacto, nacionalidad, edad, genero, sexo, Direccion_id_Direccion } = req.body;

        if (idPersonaje === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }else{
            const connection = await getConnection();
            const query = await connection.query(`SELECT e.*, p.* FROM Estudiante e, Persona p WHERE e.Persona_idPersona = p.idPersona and idPersonaje = ${idPersonaje}`);
            const estudiante = query[0];
    
            Persona_idPersona = (Persona_idPersona === undefined) ? estudiante.Persona_idPersona : Persona_idPersona;
            Recibe_Religion = (Recibe_Religion === undefined) ? estudiante.Recibe_Religion : Recibe_Religion;
            modalidad = (modalidad === undefined) ? estudiante.modalidad : modalidad;
            Adecuacion_idAdecuacion = (Adecuacion_idAdecuacion === undefined) ? estudiante.Adecuacion_idAdecuacion : Adecuacion_idAdecuacion;
            Grado_idGrado = (Grado_idGrado === undefined) ? estudiante.Grado_idGrado : Grado_idGrado;
            seccion_idseccion = (seccion_idseccion === undefined) ? estudiante.seccion_idseccion : seccion_idseccion;
            tiene_internet = (tiene_internet === undefined) ? estudiante.tiene_internet : tiene_internet;
            repitente = (repitente === undefined) ? estudiante.repitente : repitente;
            observaciones = (observaciones === undefined) ? estudiante.observaciones : observaciones;

            idPersona = (idPersona === undefined) ? estudiante.idPersona : idPersona;
            Nombre = (Nombre === undefined) ? estudiante.Nombre : Nombre;
            Apel1 = (Apel1 === undefined) ? estudiante.Apel1 : Apel1;
            Apel2 = (Apel2 === undefined) ? estudiante.Apel2 : Apel2;
            cedula = (cedula === undefined) ? estudiante.cedula : cedula;
            email = (email === undefined) ? estudiante.email : email;
            Roll_idRol = (Roll_idRol === undefined) ? estudiante.Roll_idRol : Roll_idRol;
            contacto = (contacto === undefined) ? estudiante.contacto : contacto;
            nacionalidad = (nacionalidad === undefined) ? estudiante.nacionalidad : nacionalidad;
            edad = (edad === undefined) ? estudiante.edad : edad;
            genero = (genero === undefined) ? estudiante.genero : genero;
            sexo = (sexo === undefined) ? estudiante.sexo : sexo;
            Direccion_id_Direccion = (Direccion_id_Direccion === undefined) ? estudiante.Direccion_id_Direccion : Direccion_id_Direccion;
    
            const result = await connection.query(`UPDATE Estudiante e, Persona p SET e.idPersonaje = ${idPersonaje}, e.Recibe_Religion = '${Recibe_Religion}', e.modalidad = '${modalidad}', e.Adecuacion_idAdecuacion = ${Adecuacion_idAdecuacion}, e.Grado_idGrado = ${Grado_idGrado}, e.seccion_idseccion = ${seccion_idseccion}, e.repitente = '${repitente}', e.observaciones = '${observaciones}', p.idPersona = ${idPersona}, p.Nombre = '${Nombre}', p.Apel1 = '${Apel1}', p.Apel2 = '${Apel2}', p.cedula = '${cedula}', p.email = '${email}',  p.Roll_idRol = ${Roll_idRol},  p.contacto = '${contacto}', p.nacionalidad = '${nacionalidad}', p.edad = '${edad}', p.genero = '${genero}', p.sexo = '${sexo}', p.Direccion_id_Direccion = ${Direccion_id_Direccion} WHERE e.Persona_idPersona = p.Persona_idPersona and e.idPersonaje = ${idPersonaje};`);
    
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