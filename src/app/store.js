// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import difficultyReducer from '../features/gameSlice'

import { configureStore } from '@reduxjs/toolkit'

const rootRuducer = {
    difficulty: difficultyReducer
}

const store = configureStore({
    reducer: rootRuducer,
})

export default store