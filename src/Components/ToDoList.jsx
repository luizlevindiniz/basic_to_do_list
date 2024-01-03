import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { TextInput } from "./TextInput";
import { v4 as uuidv4 } from "uuid";
import List from "@mui/material/List";
import { ToDoItem } from "./ToDoItem";

export function ToDoList() {
  const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) {
      return [
        {
          id: uuidv4(),
          text: "workout",
          completed: true,
        },
      ];
    } else {
      return data;
    }
  };

  const [toDo, setToDo] = useState(getInitialData);

  const toggleToDo = (id) => {
    setToDo((currentItens) => {
      return currentItens.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });
  };

  const deleteToDo = (id) => {
    setToDo((currentItens) => {
      return currentItens.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {toDo.map((value) => (
          <ToDoItem
            key={value.id}
            toggleToDo={() => toggleToDo(value.id)}
            item={value}
            deleteToDo={() => deleteToDo(value.id)}
          />
        ))}
      </List>
      <Box>
        <TextInput setToDo={setToDo}></TextInput>
      </Box>
    </>
  );
}

export default { ToDoList };
