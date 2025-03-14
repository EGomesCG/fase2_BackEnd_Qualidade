const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }, // Considere mudar para ObjectId se referenciar usuários
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now } // Alterado para 'modifiedAt'
});

// Middleware para atualizar a data de modificação
postSchema.pre('save', function(next) {
    this.modifiedAt = Date.now();
    next();
});

module.exports = mongoose.model('Post', postSchema);
