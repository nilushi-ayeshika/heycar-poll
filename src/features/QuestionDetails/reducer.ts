import {
  key,
  GET_QUESTION_DETAILS_LIST,
  GET_QUESTION_DETAILS_SUCCESS,
  GET_QUESTION_DETAILS_ERROR,
  QuestionsDetailsDispatchTypes,
} from './actions.types'
import { IQuestionDetailsDefaultState } from './reducer.types'

export const selectors = {
  loading: (state: any) => state[key].loading,
  data: (state: any) => state[key].data,
}

const initialState = {
  loading: false,
  data: undefined,
}

export const reducer = function reducer(
  state: IQuestionDetailsDefaultState = initialState,
  action: QuestionsDetailsDispatchTypes
) {
  switch (action.type) {
    case GET_QUESTION_DETAILS_LIST:
      return {
        ...state,
        loading: true,
        data: undefined,
      }
    case GET_QUESTION_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case GET_QUESTION_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        data: undefined,
      }
    default:
      return state
  }
}
