import { IQuestion } from '../../components/Questions/Card/Card.types'

export interface IQuestionDefaultState {
  loading: boolean
  data: IQuestion[]
  nextPageLink: string
}
