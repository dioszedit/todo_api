module.exports = (objRep) => {
    const {todoModel} = objRep;
    return (req, res, next) => {
        const todo = todoModel.findOne({id: req.params.id});

        if(!todo) {
            res.locals.status = 404;
            res.locals.err = `Todo not found with id: ${req.params.id}`;
            return next();
        }

        res.locals.todo = todo;
        return next();
    }
}