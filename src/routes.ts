import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';

const router = Router();

router.get('/endereco/list', EnderecoController.list);
router.post('/endereco/store', EnderecoController.store);
router.delete('/endereco/delete', EnderecoController.delete);//define uma rota ...
router.get('/local/list', LocalController.list);
router.post('/local/store', LocalController.store);
router.delete('/local/delete', LocalController.delete);
export default router;

