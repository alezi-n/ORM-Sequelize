const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriasController = new CategoriaController();

const router = Router();

router.get('/categorias', (req, res) => categoriasController.pegaTodos(req, res));
router.get('/categorias/:id', (req, res) => categoriasController.pegaUmPorId(req, res));
router.post('/categorias', (req, res) => categoriasController.criaNovo(req, res));
router.put('/categorias/:id', (req, res) => categoriasController.atualiza(req, res));
router.delete('/categorias/:id', (req, res) => categoriasController.exclui(req, res));

module.exports = router;