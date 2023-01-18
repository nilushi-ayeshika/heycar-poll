import { IQuestion } from '../../components/Questions/Card/Card.types'

export interface IQuestionDetailsDefaultState {
  loading: boolean
  data: IQuestion[] | undefined
}
