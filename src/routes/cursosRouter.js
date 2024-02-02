const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursosController = new CursoController();

const router = Router();

router.get('/curso', (req, res) => cursosController.pegaTodos(req, res));
router.get('/curso/:id', (req, res) => cursosController.pegaUmPorId(req, res));
router.post('/curso', (req, res) => cursosController.criaNovo(req, res));
router.put('/curso/:id', (req, res) => cursosController.atualiza(req, res));
router.delete('/curso/:id', (req, res) => cursosController.exclui(req, res));

module.exports = router;