const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get('/', (req, res) => {
    res.end('Hola');
});

router.get('/', () => { });

router.post('/', () => { });

module.exports = router;