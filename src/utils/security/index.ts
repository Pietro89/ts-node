import {Request} from "express";
import {ERROR_MESSAGES} from "../errors/index";
import * as jwt from "jsonwebtoken";
import {findUserById} from "../../db/models/user/repository";
import {User} from "../../db/models/user/types";

// @ts-ignore
export const BearerAuth = async (req) => {
    const token = getToken(req)
    if(!token) {
        throw (ERROR_MESSAGES.MISSING_TOKEN)
    }
    const decoded = await <User>jwt.verify(token as string, "secret");
    if(!decoded) {
        throw (ERROR_MESSAGES.INVALID_TOKEN)
    }
    const user = await findUserById(decoded.id)
    if(!user) {
        throw (ERROR_MESSAGES.INVALID_USER)
    }
    return true
}


const getToken = (req:Request) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    return null;
}



