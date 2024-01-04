import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> criar um novo usuário -> POST
show -> mostra usuário -> GET
update -> atualiza um usuário -> PATH ou PUT
*/
