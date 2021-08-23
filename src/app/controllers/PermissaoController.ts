import {Request, Response} from 'express'
import {getRepository} from 'typeorm'

import NucleoPermissao from '../models/NucleoPermissao';


class PermissaoController{

async getAll(res: Response){
    const repository = getRepository(NucleoPermissao);
    const permissoes = await repository.find();
    return res.json(permissoes);
 }
}

export default new PermissaoController();