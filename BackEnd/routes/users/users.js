var express = require('express');
const {signup,signin} = require('../../controllers/userController')
var router = express.Router();
router.post('/register',signup)
router.post('/login',signin)

module.exports = router;
