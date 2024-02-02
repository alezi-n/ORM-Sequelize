const { Router } = require('express');
const CategoriaController = require('../controllers/CategoriaController.js');

const categoriasController = new CategoriaController();

const router = Router();

router.get('/categoria', (req, res) => categoriasController.pegaTodos(req, res));
router.get('/categoria/:id', (req, res) => categoriasController.pegaUmPorId(req, res));
router.post('/categoria', (req, res) => categoriasController.criaNovo(req, res));
router.put('/categoria/:id', (req, res) => categoriasController.atualiza(req, res));
router.delete('/categoria/:id', (req, res) => categoriasController.exclui(req, res));

module.exports = router;