export default store => next => action => {
    if (!action.createId) return next(action);
    next({...action, payload: {...action.payload, ...{id: Math.random()}}})
}