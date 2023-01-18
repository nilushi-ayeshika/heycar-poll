export interface QuestionListProps<RowItem> {
  className?: string
  placeholderCount?: number
  data: Array<RowItem>
  hasMoreData: boolean
  pageCount: number
  dataLoading?: boolean
  bottomHitThreshold?: number
  onNextPageRequested: () => any
}
