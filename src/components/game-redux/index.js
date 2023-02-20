import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameViewRedux from './GameViewRedux'

import StartViewRedux from './StartViewRedux'

function GameRedux() {
  const dispatch = useDispatch()
  const state = useSelector((state)=> state.StartViewRedux)
  const [view,setView] = useState('StartView')

  const handleGameStart = () => {
    setView('GameView')

    // console.log('active')
  }


  const renderSwitch = (param)=> {
    switch (param) {
      case 'StartView':
        return <StartViewRedux handleGameStart={handleGameStart}/>
      case 'GameView':
        return <GameViewRedux/>
      default:
        break;
    }
  }

  return (
    <>
    {renderSwitch(view)}
    {/* <StartViewRedux handleGameStart={handleGameStart}/>
    <GameViewRedux/> */}
    </>
  )
}

export default GameRedux