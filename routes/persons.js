const express = require('express'); //Inyección de la dependencia
const router = express.Router();//Instancia del router
const mongoose = require('../node_modules/mongoose');//Inyección de la dependencia de mongoose
let Person = require('../models/person');//Inyección de la dependencia del modelo person

//Ruta 'persons'
router.get('/persons', function(req, res, next){
    Person.find(function(err, persons){
        if(err) return next(err);
        res.json(persons);
    })
});

//Exportar el ruteador
module.exports = router;