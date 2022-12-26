import { Card } from "@mui/material";
import ToDoCard from "./components/ToDoCard";
import ToDoEntryCard from "./components/ToDoEntryCard";
import { useSelector } from "react-redux";
import store from "./store/configureStore";
import { removeTodo } from "./actions/todoActions";

const ToDoApp = () => {
  const todos = useSelector((state) => state.todos);
  const handleClick = (e) => {
    store.dispatch(removeTodo(e.currentTarget.id));
    console.log(e.currentTarget.id);
  };
  return (
    <>
      <Card
        sx={{ width: "40rem", marginX: "auto", marginY: "2rem", padding: 2 }}
      >
        <h1>Add Your ToDos</h1>
        <ToDoEntryCard />
        <ul>
          {todos.map((todoItem, id) => (
            <div id={id} key={id} onClick={handleClick}>
              <ToDoCard todo={todoItem}></ToDoCard>
            </div>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default ToDoApp;
