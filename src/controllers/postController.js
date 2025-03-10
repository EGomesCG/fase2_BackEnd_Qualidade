const Post = require('../../models/post');

// Lista todos os posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Visualizar o detalhe do post
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post não encontrado.' });
        }
        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Criar um novo post
exports.createPost = async (req, res) => {
    const { title, content, author } = req.body;

    // Validação simples
    if (!title || !content || !author) {
        return res.status(400).json({ success: false, message: 'Todos os campos são obrigatórios.' });
    }

    const post = new Post({ title, content, author });

    try {
        const newPost = await post.save();
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Atualizar um post
exports.updatePost = async (req, res) => {
    const { title, content } = req.body;

    // Validação simples
    if (!title && !content) {
        return res.status(400).json({ success: false, message: 'Pelo menos um campo deve ser atualizado.' });
    }

    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post não encontrado.' });
        }
        if (title) post.title = title;
        if (content) post.content = content;

        const updatedPost = await post.save();
        res.status(200).json({ success: true, data: updatedPost });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Deletar um post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post não encontrado.' });
        }
        await post.deleteOne();
        res.status(200).json({ success: true, message: 'Post deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};