import { Router } from "express";

import authMiddleware from "./app/middlewares/authMiddleware";

import PermissaoController from "./app/controllers/PermissaoController";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";

const router = Router();

router.get('/permissoes', PermissaoController.getAll);
router.post('/users', UserController.store);
router.get('/users', UserController.index);
router.post('/auth', AuthController.authenticate);

export default router;