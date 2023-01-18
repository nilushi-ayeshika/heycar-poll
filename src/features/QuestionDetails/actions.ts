import { Dispatch } from 'redux'

import {
  GET_QUESTION_DETAILS_LIST,
  GET_QUESTION_DETAILS_SUCCESS,
  GET_QUESTION_DETAILS_ERROR,
  QuestionsDetailsDispatchTypes,
} from './actions.types'

import QuestionAPI from '../../api/QuestionApi'

export const getQuestionDetails =
  (id: number) => async (dispatch: Dispatch<QuestionsDetailsDispatchTypes>) => {
    try {
      dispatch({ type: GET_QUESTION_DETAILS_LIST })
      const res = await QuestionAPI.getQuestionDetails(id)

      dispatch({
        type: GET_QUESTION_DETAILS_SUCCESS,
        payload: res.data,
      })
    } catch (e) {
      dispatch({
        type: GET_QUESTION_DETAILS_ERROR,
      })
    }
  }
