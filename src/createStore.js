import { createStore, applyMiddleware } from 'redux';
import ReactThink from 'redux-thunk'
import RootReducer from './reducers'

const middleware = [ReactThink]

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export const store = createStoreWithMiddleware(RootReducer)