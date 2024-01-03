import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export function ToDoItem({ item, toggleToDo, deleteToDo }) {
  const labelId = `checkbox-list-label-${item.id}`;
  return (
    <ListItem
      key={item.id}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={deleteToDo}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={toggleToDo} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={item.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default { ToDoItem };
