module.exports = (objRep) => {
    const {todoModel, db, uuid} = objRep;
    return (req, res, next) => {

        if (typeof req.body.todo === 'undefined') {
            res.locals.status = 400;
            res.locals.err = "Missing todo.";
            return next();
        }

        let newTodo = {
            id: uuid.v4(),
            todo: req.body.todo
        };

        todoModel.insert(newTodo);
        return db.saveDatabase((err) => {
            if (err) {
                res.locals.status = 500;
                res.locals.err = err;
            }

            res.locals.todo = newTodo;
            return next();
        });
    }
}