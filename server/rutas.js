const Router = require('express').Router();
const Users = require('./model.js')

//Iniciar  Seccion --LOGIN

Router.post('/login', function(req, res) {
   let user = req.query.usuario
   let pass = req.query.contraseña
    Users.findOne({usuario: user, contrasena: pass}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})







//Obtener todos los usuarios
Router.get('/all', function(req, res) {
    Users.find({}).exec(function(err, docs) {
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(docs)
    })
})

// Obtener un usuario por su id
Router.get('/', function(req, res) {
    let nombre = req.query.nombre
    Users.findOne({nombres: nombre}).exec(function(err, doc){
        if (err) {
            res.status(500)
            res.json(err)
        }
        res.json(doc)
    })
})

// Agregar a un usuario
Router.post('/new', function(req, res) {
    let user = new Users({
        
        nombre: req.body.usuario,
        contraseña: Math.floor(Math.random() * 50),
    })
    user.save(function(error) {
        if (error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro guardado")
    })
})

// Eliminar un usuario por su id
Router.get('/delete/:id', function(req, res) {
    let uid = req.params.id
    Users.remove({userId: uid}, function(error) {
        if(error) {
            res.status(500)
            res.json(error)
        }
        res.send("Registro eliminado")
    })
})

// Inactivar un usuario por su id
Router.post('/inactive/:id', function(req, res) {

})

// Activar un usuario por su id
Router.post('/active/:id', function(req, res) {

})

module.exports = Router
