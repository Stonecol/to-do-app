import { Card, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { useState } from "react";
import store from "../store/configureStore";
import {addTodo} from "../actions/todoActions";

const ToDoEntryCard = () => {
  const [todo, setTodo] = useState("");

  const handleClick = () => {
    store.dispatch(addTodo(todo));
    setTodo("");
  };
  return (
    <>
      <Card sx={{ width: "30rem", margin: "auto", padding: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box>
            <TextField
              onChange={(e) => {
                setTodo(e.target.value);
              }}
              value={todo}
              sx={{ width: "20rem" }}
              id="outlined-basic"
              label="Type something to add"
              variant="outlined"
            />
          </Box>
          <Box>
            <IconButton sx={{ marginX: "2rem" }} onClick={handleClick}>
              <AddIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ToDoEntryCard;
