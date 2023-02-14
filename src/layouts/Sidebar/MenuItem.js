import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ item }) {
  console.log(item.to);
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          key={item.label}
          sx={{ py: 1, minHeight: 32 }}
          component={Link}
          to={item.to}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}

export default MenuItem;
