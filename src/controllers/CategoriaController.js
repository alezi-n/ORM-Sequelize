const Controller = require('./Controller.js');
const CategoriaServices = require('../services/CategoriaServices.js');

const categoriasServices = new CategoriaServices();

class CategoriaController extends Controller {
  constructor() {
    super(categoriasServices);
  }
}

module.exports = CategoriaController;
