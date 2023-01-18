import { IQuestion } from '../../components/Questions/Card/Card.types'

export const key = 'questions'

export const GET_QUESTION_LIST = 'GET_QUESTION_LIST'
export const GET_QUESTION_LIST_SUCCESS = 'GET_QUESTION_LIST_SUCCESS'
export const GET_QUESTION_LIST_ERROR = 'GET_QUESTION_LIST_ERROR'

export interface IGetQuestionList {
  type: typeof GET_QUESTION_LIST
}

export interface IQuestionData {
  data: IQuestion[]
  link: string
  page: number
}

export interface IGetQuestionListSuccess {
  type: typeof GET_QUESTION_LIST_SUCCESS
  payload: IQuestionData
}

export interface IGetQuestionListError {
  type: typeof GET_QUESTION_LIST_ERROR
}

export type QuestionsDispatchTypes =
  | IGetQuestionList
  | IGetQuestionListSuccess
  | IGetQuestionListError
