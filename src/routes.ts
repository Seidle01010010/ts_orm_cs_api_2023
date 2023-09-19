import {Router} from 'express';
import EnderecoController from './app/controllers/EnderecoController';
import JogadorController from './app/controllers/JogadorController';
import LocalController from './app/controllers/LocalController';
import MapaController from './app/controllers/MapaController';
import ObjetivoController from './app/controllers/ObjetivoController';
import PatenteController from './app/controllers/PatenteController';
import RoundController from './app/controllers/RoundController';
import PartidaController from './app/controllers/PartidaController';

const router = Router();

router.get('/endereco/list', EnderecoController.list);
router.post('/endereco/store', EnderecoController.store);
router.delete('/endereco/delete', EnderecoController.delete);//define uma rota ...
router.get('/local/list', LocalController.list);
router.post('/local/store', LocalController.store);
router.delete('/local/delete', LocalController.delete);
router.get('/jogador/list', JogadorController.list);
router.post('/jogador/store', JogadorController.store);
router.delete('/jogador/delete', JogadorController.delete);
router.get('/mapa/list', MapaController.list);
router.post('/mapa/store', MapaController.store);
router.delete('/mapa/delete', MapaController.delete);
router.get('/objetivo/list', ObjetivoController.list);
router.post('/objetivo/store', ObjetivoController.store);
router.delete('/objetivo/delete', ObjetivoController.delete);
router.get('/patente/list', PatenteController.list);
router.post('/patente/store', PatenteController.store);
router.delete('/patente/delete', PatenteController.delete);
router.get('/round/list', RoundController.list);
router.post('/round/store', RoundController.store);
router.delete('/round/delete', RoundController.delete);
router.get('/partida/list', PartidaController.list);
router.post('/partida/store', PartidaController.store);
router.delete('/partida/delete', PartidaController.delete);
export default router;

