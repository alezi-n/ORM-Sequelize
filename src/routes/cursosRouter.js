const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursosController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursosController.pegaCursos(req, res));
router.get('/cursos/:id', (req, res) => cursosController.pegaUmPorId(req, res));
router.post('/cursos', (req, res) => cursosController.criaNovo(req, res));
router.put('/cursos/:id', (req, res) => cursosController.atualiza(req, res));
router.delete('/cursos/:id', (req, res) => cursosController.exclui(req, res));

module.exports = router;

// ?data_inicial=2023-01-01&data_final=2023-09-01