import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  ClickAwayListener,
  Divider,
  Fade,
  Grid,
  InputAdornment,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  Popper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UserLoggedIn from "./UserLoggedIn";

//mui icon
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import defaultAvatar from "../../../assets/images/users/default-user-avatar.png";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

function HeaderProfile() {
  const isLogedIn = false;

  const LogInButton = ()=> {
    return(
      <button>Log In</button>
    )
  }

  return (
    <div>
     {isLogedIn ? <UserLoggedIn /> : <LogInButton />}
    </div>
  );
}

export default HeaderProfile;
