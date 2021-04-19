const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/login', AuthController.call('login'));
router.post('/register', AuthController.call('register'));
router.get('/users/:action', function(req, res){
    const controller = new UserController(req, res);
    return controller.call();
})

module.exports = router;