const Post = require('../models/post');

//Lista todos os post's
exports.getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
        res.render('index', {posts});//Precisa renderizar a view correta de lista de post's
    } catch (error) {
        res.status(500).json({message: error.messagem});
    }
};

//Visualizar o detalhe do post
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message: 'Post nao encontrado.'});
        };
        res.status(200).json(posts);
        res.render('detail', {posts});//Precisa renderizar a view correta de detalhe do post    

    } catch (error) {
        res.status(500).json({messagem: error.messagem});
    }
};

//Criação de um novo post
exports.createPost = async (req,res) => {
    const { title, content, author, createdAt } = req.body;
    const post = new Post({ title, content, author, createdAt });

    try {
        const newPost = await post.save();
        res.status(200).json(newPost);
        res.redirect('index');//Depois de salvar ir para lista de posts.
    } catch (error) {
        res.status(500).json({messagem: error.messagem});
    }
};

//Atualização de um post
exports.updatePost = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return  res.status(404).json({ message: 'Post não encontrado.'});
        }
        post.title = title;
        post.content = content;
        
        const updatePost = await post.save();

        res.status(200).json(updatePost);
        res.redirect('index');
    } catch (error) {
        res.status(500).json({messagem: error.messagem});
    }
};

//Deletar um post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post não encontrado.' });
        }
        await post.remove();
        res.status(200).json({ message: 'Post deletado com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};