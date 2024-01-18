const unknownRoute = require('./unknown.route');
const salutationRoute = require('./salutation.route');
const homeRoute = require('./home.route');
const crudRoute = require('./crud.route');
const personneRoute = require('./personne.route');

module.exports = [personneRoute, unknownRoute, salutationRoute, homeRoute, crudRoute];