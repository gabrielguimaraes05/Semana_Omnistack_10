const { Router } = require('express');
const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')
const routers = Router();


routers.post('/devs', DevController.store);
routers.get('/devs', DevController.index);

routers.get('/search', SearchController.index);

module.exports = routers;