module.exports = (objRep) => {
    const {todoModel, db} = objRep;

    return (req, res, next) => {
        if (res.locals.err) {
            return next();
        }

        const deletedTodo = res.locals.todo;
        todoModel.remove(deletedTodo);

        return db.saveDatabase((err) => {
            if (err) {
                res.locals.status = 500;
                res.locals.err = err;
            }

            res.locals.todo = deletedTodo;

            return next();
        });
    }
}