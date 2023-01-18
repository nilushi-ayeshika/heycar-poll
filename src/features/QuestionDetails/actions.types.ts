import { IQuestion } from '../../components/Questions/Card/Card.types'

export const key = 'questionDetails'

export const GET_QUESTION_DETAILS_LIST = 'GET_QUESTION_DETAILS_LIST'
export const GET_QUESTION_DETAILS_SUCCESS = 'GET_QUESTION_DETAILS_SUCCESS'
export const GET_QUESTION_DETAILS_ERROR = 'GET_QUESTION_DETAILS_ERROR'

export interface IGetQuestionDetails {
  type: typeof GET_QUESTION_DETAILS_LIST
}

export interface IQuestionDetails {
  data: IQuestion[]
  link: string
  page: number
}

export interface IGetQuestionDetailsSuccess {
  type: typeof GET_QUESTION_DETAILS_SUCCESS
  payload: IQuestionDetails
}

export interface IGetQuestionDetailsError {
  type: typeof GET_QUESTION_DETAILS_ERROR
}

export type QuestionsDetailsDispatchTypes =
  | IGetQuestionDetails
  | IGetQuestionDetailsSuccess
  | IGetQuestionDetailsError
