import * as React from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function TextInput({ setToDo }) {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setToDo((currentItens) => [
      ...currentItens,
      { id: uuidv4(), text: item, completed: false },
    ]);
    setItem("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl variant="filled">
        <FilledInput
          id="item"
          value={item}
          onChange={handleChange}
          placeholder="New Item"
        />
      </FormControl>
    </Box>
  );
}

export default { TextInput };
