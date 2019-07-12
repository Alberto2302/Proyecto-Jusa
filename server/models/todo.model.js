const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    id_employe: {
        type: String
    },
    name: {
        type: String
    },
    gender: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);