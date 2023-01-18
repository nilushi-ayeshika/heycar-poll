import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

import RootReducer from './rootReducer'

const routeMiddleware = routerMiddleware(window.history)
const middlewares = applyMiddleware(routeMiddleware, thunk)

const Store = createStore(RootReducer(), composeWithDevTools(middlewares))

export default Store
