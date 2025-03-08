const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

// Rotas para posts
router.get('/posts', postController.getAllPosts); // Listar todos os posts
router.get('/posts/:id', postController.getPostById); // Visualizar um post específico
router.post('/posts', postController.createPost); // Criar um novo post
router.put('/posts/:id', postController.updatePost); // Atualizar um post existente
router.delete('/posts/:id', postController.deletePost); // Deletar um post

module.exports = router;