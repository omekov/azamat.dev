import { createStore, applyMiddleware } from 'redux';
import ReactThink from 'redux-thunk'
import RootReducer from './reducers'

export const middlewares = [ReactThink]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer)