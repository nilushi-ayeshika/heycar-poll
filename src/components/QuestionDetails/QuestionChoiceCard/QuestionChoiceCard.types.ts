export interface IDetailCard {
  id: string
  questionId: string
  className?: string
  choice: string
  url: string
  votes: number
  onVoteClick?: (event: React.ChangeEvent<HTMLInputElement>, callbackValue: any) => any
  checkedId: string | undefined
  disabled?: boolean
  percentage: string
}
