module.exports = (objRep) => {
    const {todoModel, db} = objRep;
    return (req, res, next) => {

        if (res.locals.err) {
            return next();
        }

        if(typeof req.body.todo !== 'undefined') {
            res.locals.todo.todo = req.body.todo;
        }

        todoModel.update(res.locals.todo);

        return db.saveDatabase((err) => {
            if (err) {
                res.locals.status = 500;
                res.locals.err = err;
            }

            return next();
        });
    }
}