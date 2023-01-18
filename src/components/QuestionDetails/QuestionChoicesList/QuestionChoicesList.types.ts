import { IDetailListChoices } from '../QuestionDetail/QuestionDetail.types'

export interface IDetailListProps {
  id: any
  className?: string
  checkedChoiceId: string
  placeholderCount?: number
  data: IDetailListChoices[]
  dataLoading: boolean
  onHandleVoteClick: (callback: any) => any
}
