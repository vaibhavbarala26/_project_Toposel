const express = require('express');
const router = express.Router();
const userController = require("../Controlers/UserController")
const auth = require('../middleware/auth');
const { registerValidation, loginValidation, validate } = require('../middleware/validation');

router.post('/register', registerValidation, validate, userController.register);
router.post('/login', loginValidation, validate, userController.login);
router.post('/logout', auth, userController.logout);
router.get('/search', auth, userController.searchUsers);

module.exports = router;