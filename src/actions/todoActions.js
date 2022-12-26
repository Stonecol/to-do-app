const addTodo = (todo) => {
    return { type: "ADD", payload:{todo} }
}

const removeTodo = (id) => {
    return { type: "REMOVE", payload:{id}}
}
export { addTodo, removeTodo };