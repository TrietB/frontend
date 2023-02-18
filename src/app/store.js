// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import startViewSlice from '../features/startViewSlice'
import gameViewSlice from '../features/gameViewSlice'
import gameOverSlice from '../features/gameOverSlice'

import { configureStore } from '@reduxjs/toolkit'

const rootRuducer = {
    startView: startViewSlice,
    gameView: gameViewSlice,
    gameOverView: gameOverSlice
}

const store = configureStore({
    reducer: rootRuducer,
})

export default store