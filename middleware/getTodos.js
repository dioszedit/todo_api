module.exports = (objRep) => {
    const {todoModel} = objRep;
    return(req, res, next) => {
        res.locals.todos = todoModel.find();
        return next();
    }
}