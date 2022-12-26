import { Card } from "@mui/material";

const ToDoCard = ({ todo }) => {
  // const handleClick = (e) => {
  //   console.log();
  // };

  return (
    <>
      <Card sx={{ width: "30rem", marginX: "auto", marginY: 2 }}>
        <p>{todo}</p>
      </Card>
    </>
  );
};

export default ToDoCard;
