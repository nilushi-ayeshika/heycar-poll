import React, { useCallback } from 'react'
import moment from 'moment'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

import Card from '../Card/Card.component'
import Grid from '../../Layout/Grid/Grid.component'
import CardContentLoader from '../CardContentLoader/CardContentLoader.component'
import Text from '../../Core/Text/Text.component'

import { QuestionListProps } from './QuestionList.types'
import QuestionListWrapper from './QuestionList.theme'

const DefaultPlaceholderItemsCount = 6

const QuestionList: React.FC<QuestionListProps<any>> = (props) => {
  const {
    className,
    placeholderCount,
    data,
    dataLoading,
    hasMoreData,
    pageCount,
    onNextPageRequested,
  } = props

  const navigate = useNavigate()
  const placeholderItemsCount = placeholderCount || DefaultPlaceholderItemsCount

  const handleNextPageRequest = useCallback(() => {
    onNextPageRequested()
  }, [onNextPageRequested])

  const handleQuestionItemClick = useCallback((url) => {
    const questionId = url.substring(url.lastIndexOf('/') + 1)
    navigate(`question/${questionId}`)
  }, [navigate])

  const renderLoadingView = () => {
    return Array.from(Array(placeholderItemsCount).keys()).map((index) => (
      <CardContentLoader key={index} />
    ))
  }

  const renderInfiniteScrollView = () => (
    <InfiniteScroll
      dataLength={data.length}
      next={handleNextPageRequest}
      hasMore={hasMoreData}
      loader={renderLoadingView()}
      refreshFunction={() => null}
      pullDownToRefreshThreshold={50}
      data-test="question-list-infinite"
    >
      {data.length > 0 ? (
        data.map((item) => {
          const choiceLength = item.choices.length
          const publishedAt = moment(item.published_at).format('YYYY/MM/DD')

          return (
            <Card
              key={item.published_at}
              title={item.question}
              publishedAt={publishedAt}
              choices={choiceLength}
              className="question-card"
              onClick={handleQuestionItemClick}
              callbackValue={item.url}
              data-test="question-list-item"
            />
          )
        })
      ) : (
        <Grid direction="column" margin="3rem 0 0 0" data-test="question-list-no-data-message">
          <Text size="l">Sorry, no data to show</Text>
          <Text size="l">Please start with creating new question</Text>
        </Grid>
      )}
    </InfiniteScroll>
  )

  return (
    <QuestionListWrapper className={className} data-test="question-list-wrapper">
      <Grid className="card-list-inner">
        {dataLoading && pageCount === 1 ? renderLoadingView() : renderInfiniteScrollView()}
      </Grid>
    </QuestionListWrapper>
  )
}

export default QuestionList
