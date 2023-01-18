import { combineReducers } from 'redux'

import { key as questionState, reducer as questionStateReducer } from './features/Questions'
import {
  key as questionDetailsState,
  reducer as questionDetailsReducer,
} from './features/QuestionDetails'

export const RootReducer = () =>
  combineReducers({
    [questionState]: questionStateReducer,
    [questionDetailsState]: questionDetailsReducer,
  })

export default RootReducer
