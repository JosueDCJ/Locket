const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//ROUTER

let Todo = new Schema({
    todo_nombreproyecto: {
        type: String
    },
    todo_anno: {
        type: String
    },
    todo_descripcionproyecto: {
        type: String
    },
    todo_meritologro: {
        type: String
    },
    todo_palabrasclave: {
        type: String
    },
    todo_imagen: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);

