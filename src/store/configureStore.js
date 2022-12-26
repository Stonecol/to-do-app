import { createStore } from "redux";
import todoReducer from "../reducers/todoReducer";

const store = createStore(todoReducer);

// store.dispatch({ type: "ADD", hello: "gimme a hell yeah!!!" });

export default store;
