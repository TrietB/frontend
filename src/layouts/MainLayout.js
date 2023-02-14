import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
// import Sidebar from './Sidebar'

const styles = (theme) => ({
  toolbar: theme.minxins.toolbar,
});

function MainLayout({children}) {
  // const { classes } = props;

  return (
    // <>
    //   <Header />
    //   <Sidebar />
    //   <Outlet />
    // </>
    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
      <CssBaseline/>
      {/* header */}
      <Header/>
      {/* sidebar */}
      <Sidebar/>
      {/* <Container sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      {children}
    </Container> */}
    <Outlet/>

    </Box>

  );
}

export default MainLayout;
