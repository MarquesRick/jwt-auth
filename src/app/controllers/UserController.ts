import {Request, Response} from 'express'
import {getRepository} from 'typeorm'

import User from '../models/User';


class UserController{
    index(req: Request, res: Response){
        return res.send('ok');
    }

async store(req: Request, res: Response){
    const repository = getRepository(User);
    const {email, senha} = req.body;

    const userExists = await repository.findOne({where: {email}});

    if(userExists){
        //conflict
        return res.sendStatus(409);
    }

    const user = repository.create({email, senha});
    await repository.save(user);

    return res.json(user);
 }
}

export default new UserController();