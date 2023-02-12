import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import {
  Avatar,
  Chip,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
//icon
import SettingsIcon from "@mui/icons-material/Settings";
import defaultAvatar from "../../../assets/images/users/default-user-avatar.png";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export default function UserLoggedIn() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <div>
      <Chip
        sx={{
          height: "48px",
          alignItems: "center",
          borderRadius: "27px",
          transition: "all .2s ease-in-out",
          borderColor: " black",
        }}
        icon={
          <Avatar
            src={defaultAvatar}
            sx={{
              margin: "8px 0 8px 8px !important",
              cursor: "pointer",
            }}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            color="secondary"
          />
        }
        label={<SettingsIcon stroke={1.5} size="1.5rem" color="secondary" />}
        variant="outlined"
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      />
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="bottom-end"
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                <List
                  component="nav"
                  sx={{
                    width: "100%",
                    maxWidth: 350,
                    minWidth: 300,
                    borderRadius: "10px",
                    "& .MuiListItemButton-root": {
                      mt: 0.5,
                    },
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon
                        stroke={1.5}
                        size="1.3rem"
                        color="primary"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          Account Settings
                        </Typography>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <PersonIcon stroke={1.5} size="1.3rem" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Grid
                          container
                          spacing={1}
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography variant="body2">
                              Social Profile
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Chip label="02" size="small" />
                          </Grid>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutIcon stroke={1.5} size="1.3rem" />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="body2">Logout</Typography>}
                    />
                  </ListItemButton>
                </List>
              </Box>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </div>
  );
}
