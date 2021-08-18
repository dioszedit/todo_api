const loki = require('lokijs');
const db = new loki('todo.db');

function initDatabase(cb) {
    db.loadDatabase({}, err => {
        if(err) {
            return cb(err);
        }
        let todoModel = db.getCollection("todos");
        if (todoModel === null) {
            todoModel = db.addCollection("todos");
        }

        db.saveDatabase(err => {
            cb(err, {db, todoModel});
        });
    });
}

module.exports.initDatabase = initDatabase;