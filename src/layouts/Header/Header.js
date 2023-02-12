// header sections
import HeaderLogo from "./HeaderLogo";
import HeaderNotification from "./HeaderNotification";
import HeaderProfile from "./HeaderSection/HeaderProfile";

//mui
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  return (
    // <>
    // <HeaderLogo/>
    // <HeaderNotification/>
    // <HeaderProfile/>
    // </>
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static" sx={{backgroundColor:'grey'}}>
        <Toolbar>
          <HeaderLogo/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2 }}>
            TypingSpeed
          </Typography>
          <HeaderNotification/>
          <HeaderProfile/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header