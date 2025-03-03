const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de postagem');
});

router.post('/', (req, res) => {
    res.send('Post criado');
});

router.delete('/{id}', (req, res) => {
    res.send('Post deletado');
});


module.exports = router;