import { Dispatch } from 'redux'

import {
  GET_QUESTION_LIST,
  GET_QUESTION_LIST_SUCCESS,
  GET_QUESTION_LIST_ERROR,
  QuestionsDispatchTypes,
} from './actions.types'

import QuestionAPI from '../../api/QuestionApi'

export const getQuestionList =
  (pageCount: number) => async (dispatch: Dispatch<QuestionsDispatchTypes>) => {
    try {
      dispatch({ type: GET_QUESTION_LIST })
      const res = await QuestionAPI.getQuestions(pageCount)

      dispatch({
        type: GET_QUESTION_LIST_SUCCESS,
        payload: {
          data: res.data,
          link: res.headers?.link || '',
          page: pageCount,
        },
      })
    } catch (e) {
      dispatch({
        type: GET_QUESTION_LIST_ERROR,
      })
    }
  }
