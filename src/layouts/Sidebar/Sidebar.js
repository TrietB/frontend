import { Box } from '@mui/material'
import React from 'react'
import Button from '../../components/game/Button'
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
    <Button/>
    </Box>
  )
}

export default Sidebar