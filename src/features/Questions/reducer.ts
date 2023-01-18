import {
  key,
  GET_QUESTION_LIST,
  GET_QUESTION_LIST_SUCCESS,
  GET_QUESTION_LIST_ERROR,
  QuestionsDispatchTypes,
} from './actions.types'
import { IQuestionDefaultState } from './reducer.types'

export const selectors = {
  loading: (state: any) => state[key].loading,
  data: (state: any) => state[key].data,
  nextPageLink: (state: any) => state[key].nextPageLink,
}

const initialState = {
  loading: false,
  data: [],
  nextPageLink: '',
}

export const reducer = function reducer(
  state: IQuestionDefaultState = initialState,
  action: QuestionsDispatchTypes
) {
  switch (action.type) {
    case GET_QUESTION_LIST:
      return {
        ...state,
        loading: true,
        nextPageLink: '',
      }
    case GET_QUESTION_LIST_SUCCESS:
      const isInitialPage = action.payload.page === 1

      return {
        ...state,
        loading: false,
        data: isInitialPage ? action.payload.data : [...state.data, ...action.payload.data],
        nextPageLink: action.payload.link,
      }
    case GET_QUESTION_LIST_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        nextPageLink: '',
      }
    default:
      return state
  }
}
