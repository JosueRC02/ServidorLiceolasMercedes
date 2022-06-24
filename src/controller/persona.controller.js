import { getConnection } from "../database/ConexionDB";
import BaseResponse from "../response/baseResponse";
import ResponseError from "../response/responseError";

const getPersonas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT idPersona, Nombre, Apel1, Apel2, cedula, email, Roll_idRol, contacto, nacionalidad, edad, genero, sexo, Direccion_id_Direccion FROM Persona");
        res.status(200).json(new BaseResponse(
            "Personas",
            "Personas obtenidas",
            result
            ));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al obtener las personas",
            error.message
        ));
    }
};

const getPersonasId = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT idPersona, Nombre, Apel1, Apel2, cedula, email, Roll_idRol, contacto, nacionalidad, edad, genero, sexo, Direccion_id_Direccion FROM Persona WHERE idPersona = ?", id);
        res.status(200).json(new BaseResponse(
            "Personas",
            "Personas obtenidas",
            result
            ));
    } catch (error) {
        res.status(400).json(new ResponseError(
            "Error al obtener las personas",
            error.message
        ));
    }
};

const postPersona = async (req, res) => {
    try {
        const { idPersona, Nombre, Apel1, Apel2, cedula, email, Roll_idRol, contacto, nacionalidad, edad, genero, sexo, Direccion_id_Direccion } = req.body;

        if (idPersona === undefined || Nombre === undefined || Apel1 === undefined || Apel2 === undefined || cedula === undefined || email === undefined || Roll_idRol === undefined || contacto === undefined || nacionalidad === undefined || edad === undefined || genero === undefined || sexo === undefined || Direccion_id_Direccion === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }else{
            const connection = await getConnection();
            await connection.query(`INSERT INTO Persona VALUES (${idPersona}, '${Nombre}', '${Apel1}', '${Apel2}', '${cedula}', '${email}', ${Roll_idRol}, '${contacto}', '${nacionalidad}', '${edad}', '${genero}', '${sexo}', ${Direccion_id_Direccion})`);
            res.status(200).json(new BaseResponse(
                "Personas", 
                "Se agregó la persona"));
        }

    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al agregar la persona",
            error.message
        ))
    }
};

const updatePersona = async (req, res) => {
    try {
        const { idPersona, Nombre, Apel1, Apel2, cedula, email, Roll_idRol, contacto, nacionalidad, edad, genero, sexo, Direccion_id_Direccion } = req.body;

        if (idPersona === undefined) {
            res.status(400).json(new ResponseError("Solicitud incorrecta. Complete todos los campos."));
        }else{
            const connection = await getConnection();
            const query = await connection.query(`SELECT idPersona, Nombre, Apel1, Apel2, cedula, email, Roll_idRol, contacto, nacionalidad, edad, genero, sexo, Direccion_id_Direccion FROM Persona WHERE idPersona = ${idPersona}`);
            const persona = query[0];
    
            idPersona = (idPersona === undefined) ? persona.idPersona : idPersona; // If de una sola línea se realiza la comparación ? true : false
            Nombre = (Nombre === undefined) ? persona.Nombre : Nombre;
            Apel1 = (Apel1 === undefined) ? persona.Apel1 : Apel1;
            Apel2 = (Apel2 === undefined) ? persona.Apel2 : Apel2;
            cedula = (cedula === undefined) ? persona.cedula : cedula;
            email = (email === undefined) ? persona.email : email;
            Roll_idRol = (Roll_idRol === undefined) ? persona.Roll_idRol : Roll_idRol;
            contacto = (contacto === undefined) ? persona.contacto : contacto;
            nacionalidad = (nacionalidad === undefined) ? persona.nacionalidad : nacionalidad;
            edad = (edad === undefined) ? persona.edad : edad;
            genero = (genero === undefined) ? persona.genero : genero;
            sexo = (sexo === undefined) ? persona.sexo : sexo;
            Direccion_id_Direccion = (Direccion_id_Direccion === undefined) ? persona.Direccion_id_Direccion : Direccion_id_Direccion;
    
            const result = await connection.query(`UPDATE Persona SET idPersona = ${idPersona}, Nombre = '${Nombre}', Apel1 = '${Apel1}', cedula = ${cedula}, email = ${email}, Roll_idRol = ${Roll_idRol}, contacto = '${contacto}', nacionalidad = '${nacionalidad}', edad = '${edad}', genero = '${genero}', sexo = '${sexo}', Direccion_id_Direccion = '${Direccion_id_Direccion}', WHERE idPersona = ${idPersona};`);
    
            res.status(200).json(new BaseResponse(
                "Persona", 
                "Se actualizó la persona",
                result));
        }
        
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al actualizar la persona",
            error.message
        ))
    }
};

const deletePersona = async (req, res) => {
    try {
        const { idPersona } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`DELETE FROM Persona WHERE idPersona = ${idPersona}`);
        res.status(200).json(new BaseResponse(
            "Persona", 
            "Se actualizó la persona",
            result));
    } catch (error) {
        res.status(500).json(new ResponseError(
            "Error al actualizar la persona",
            error.message
        ))
    }
};

export const methods = {
    getPersonas,
    getPersonasId,
    postPersona,
    updatePersona,
    deletePersona
};