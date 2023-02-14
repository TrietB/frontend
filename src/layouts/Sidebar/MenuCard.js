import React from "react";
import MenuItem from "./MenuItem";

//icon
import SpeedIcon from "@mui/icons-material/Speed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const list = [
  { icon: <SpeedIcon />, label: "TYPING", to: "/speed-test" },
  { icon: <EmojiEventsIcon />, label: "LEADERBOARD", to: "/leaderboard" },
  { icon: '', label:'LETTERSHOOTER', to:'/letter-shooter'}
];

function MenuCard() {
  return (
    <List sx={{ py: 1 }}>
      {list.map((item, i) => (
        <MenuItem key={i} item={item} />
      ))}
    </List>
  );
}

export default MenuCard;
