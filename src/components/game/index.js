import React from 'react'

//redux
import { toggleChecked } from "../../features/gameSlice";
import { useSelector, useDispatch } from "react-redux";


import StyledButton from './StyledButton'
import StyledCheckBox from './StyledCheckBox'



function Game() {


    const {difficulty, selectId} = useSelector((state)=> state.difficulty)
    const dispatch = useDispatch()


  return (
    <>
    <StyledButton/>
    {difficulty.map((diff, i)=>{
        let checked = false
        let value = 10 + i * 5
        return (
            <StyledCheckBox
            key={value}
            value={value}
            checked={checked}
            handleInput={()=> 
                {dispatch(toggleChecked(diff.id))
                console.log(diff.id)}
            }
            >
                {diff.name}
            </StyledCheckBox>
            )})}
        
    </>
  )
}

export default Game