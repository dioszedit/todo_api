module.exports = (objRep) => {
    return (req, res, next) => {
        if (res.locals.err) {
            return res.status(res.locals.status).json({error: res.locals.err});
        }

        if(res.locals.todo) {
            return res.json(res.locals.todo)
        }

        if(res.locals.todos) {
            return res.json(res.locals.todos)
        }

        return res.json({});
    }
}