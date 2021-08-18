const uuid = require('uuid');

const getTodosMW = require('../middleware/getTodos');
const getTodoMW = require('../middleware/getTodo');
const createTodoMW = require('../middleware/createTodo');
const deleteTodoMW = require('../middleware/deleteTodo');
const updateTodoMW = require('../middleware/updateTodo');
const resJsonMW = require('../middleware/resJson');

function addRoutes(app, db, todoModel) {
    const objRep = {
        todoModel,
        db,
        uuid
    }

    //API
    app.get('/api/todo', getTodosMW(objRep), resJsonMW( objRep));
    app.get('/api/todo/:id', getTodoMW(objRep), resJsonMW( objRep));
    app.put('/api/todo', createTodoMW(objRep), resJsonMW( objRep));
    app.delete('/api/todo/:id', getTodoMW(objRep), deleteTodoMW(objRep), resJsonMW( objRep));
    app.patch('/api/todo/:id', getTodoMW(objRep), updateTodoMW(objRep), resJsonMW( objRep));
}

module.exports = addRoutes;