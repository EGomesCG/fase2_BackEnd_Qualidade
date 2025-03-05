const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.getAllPosts);

router.post('/', (req, res) => {
    res.send('Post criado');
});

router.delete('/{id}', (req, res) => {
    res.send('Post deletado');
});


module.exports = router;