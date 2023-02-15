import { Box } from '@mui/material'
import React from 'react'
import Game from '../../components/game'
import MenuCard from './MenuCard'


const navWidth = 220

const styled = {
    width: navWidth,
    borderRight: 1,
    borderBottom: 1,
    backGroundColor: 'grey',
    height: 'calc(100vh - 180px)',
    borderColor: 'grey.500',
    mr: 0
}

function Sidebar() {
  return (
    <Box sx={styled}>
    <MenuCard/>
    <Game/>
    </Box>
  )
}

export default Sidebar