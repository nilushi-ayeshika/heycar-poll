import React, { useCallback, useEffect, useState } from 'react'

import Grid from '../../Layout/Grid/Grid.component'
import QuestionChoiceCard from '../QuestionChoiceCard/QuestionChoiceCard.component'
import QuestionListContentLoader from '../QuestionListContentLoader/QuestionListContentLoader.component'
import Text from '../../Core/Text/Text.component'
import { getPercentage } from '../../../utils/common.utils'

import { IDetailListProps } from './QuestionChoicesList.types'
import QuestionChoiceListWrapper from './QuestionChoicesList.theme'

const DefaultPlaceholderItemsCount = 3

const QuestionChoicesList: React.FC<IDetailListProps> = (props) => {
  const { id, className, placeholderCount, data, dataLoading, onHandleVoteClick, checkedChoiceId } =
    props

  const [checkedId, setCheckedId] = useState(checkedChoiceId)

  const placeholderItemsCount = placeholderCount || DefaultPlaceholderItemsCount

  const handleVoteClick = useCallback(
    (event, callbackValue) => {
      setCheckedId(callbackValue.id)
      onHandleVoteClick(callbackValue)
    },
    [onHandleVoteClick]
  )

  useEffect(() => {
    setCheckedId(checkedChoiceId)
  }, [checkedChoiceId])

  const renderDataLoading = () =>
    Array.from(Array(placeholderItemsCount).keys()).map((index) => (
      <QuestionListContentLoader key={index} />
    ))

  const renderChoiceList = () => (
    <>
      {data?.length > 0 ? (
        data.map((item, index) => (
          <QuestionChoiceCard
            key={item.choice + index}
            id={item.choice + index}
            questionId={id}
            className="ques-card"
            choice={item.choice}
            url={item.url}
            votes={item.votes}
            onVoteClick={handleVoteClick}
            checkedId={checkedId}
            percentage={getPercentage(item.votes, data)}
            data-test="question-choices-item"
          />
        ))
      ) : (
        <Grid padding="3rem" data-test="question-choices-no-data-message">
          <Text size="l">No choices to display</Text>
        </Grid>
      )}
    </>
  )

  return (
    <QuestionChoiceListWrapper
      id={id}
      className={className}
      data-test="question-choices-list-wrapper"
    >
      {dataLoading ? renderDataLoading() : renderChoiceList()}
    </QuestionChoiceListWrapper>
  )
}

export default QuestionChoicesList
