const express = require('express');
const router = express.Router();
const Ely = require('../controller/ElyController');
router.get('/', Ely.Mun);
module.exports = router;