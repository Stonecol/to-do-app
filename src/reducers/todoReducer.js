const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: [...state.todos, action.payload.todo] };
    case "REMOVE":
      return {
        todos: state.todos.filter(
          (todo) => todo !== state.todos[action.payload.id]
        ),
      };
    default:
      return state;
  }
  // if (action.type === "ADD") {

  // } else {
  //   return state;
  // }
};

export default todoReducer;
