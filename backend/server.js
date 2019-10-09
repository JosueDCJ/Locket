const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_nombreproyecto = req.body.todo_nombreproyecto;
            todo.todo_anno = req.body.todo_anno;
            todo.todo_descripcionproyecto = req.body.todo_descripcionproyecto;
            todo.todo_meritologro = req.body.todo_meritologro;
            todo.todo_palabrasclave= req.body.todo_palabrasclave;
            todo.todo_imagen= req.body.todo_imagen;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Nombre Proyecto: ${this.state.todo_nombreproyecto}`);
        console.log(`Todo Anno: ${this.state.todo_anno}`);
        console.log(`Todo Descripcion Proyecto: ${this.state.todo_descripcionproyecto}`);
        console.log(`Todo Merito Logro: ${this.state.todo_meritologro}`);
        console.log(`Todo Palabras Clave: ${this.state.todo_palabrasclave}`);
        console.log(`Todo Imagen base64: ${this.state.todo_imagen}`);

        this.setState({
            todo_nombreproyecto: '',
            todo_anno: '',
            todo_descripcionproyecto: '',
            todo_meritologro: '',
            todo_palabrasclave: '',
            todo_imagen: ''
        })
    }