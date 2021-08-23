import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';


class AuthController{

async authenticate(req: Request, res: Response){
    const repository = getRepository(User);
    const {email, senha} = req.body;

    const user = await repository.findOne({where: {email}});

    if(!user){
        return res.sendStatus(401);
    }

    //validar senha
    const isValidPassword = await bcrypt.compare(senha, user?.senha);

    if(!isValidPassword){
        return res.sendStatus(401);
    }

    //yarn add jsonwebtoken
    //yarn add @types/jsonwebtoken -D
    const token = jwt.sign({id: user?.pkTabelaId}, 'secret', {expiresIn: '1d'});

    //@ts-expect-error Aqui vai ocorrer um erro, mas estou ignorando
    delete user.senha;

    return res.json({
        user,
        token,
    });
 }
}

export default new AuthController();