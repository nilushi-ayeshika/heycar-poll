import React from 'react'

import Grid from '../../Layout/Grid/Grid.component'
import Text from '../../Core/Text/Text.component'
import RadioButton from '../../Core/RadioButton/RadioButton.component'

import { IDetailCard } from './QuestionChoiceCard.types'
import QuestionChoiceCardWrapper from './QuestionChoiceCard.theme'

const QuestionChoiceCard: React.FC<IDetailCard> = (props) => {
  const {
    id,
    className,
    choice,
    votes,
    onVoteClick,
    questionId,
    url,
    disabled,
    checkedId,
    percentage,
  } = props

  const choiceId = url.split('/').pop()
  const radioButtonId = `${questionId}-${choiceId}`

  return (
    <QuestionChoiceCardWrapper
      id={id}
      className={className}
      data-test="question-choice-card-wrapper"
    >
      <Grid className="details-choice" data-test="choice-name">
        <Text size="m" weight="bold" className="label">
          Choice: &nbsp;
        </Text>
        <Text size="m">{choice}</Text>
      </Grid>
      <Grid className="details-vote-amount" data-test="choice-vote">
        <Text size="m" weight="bold" className="label">
          Vote Amount: &nbsp;
        </Text>
        <Text size="m">{votes}</Text>
      </Grid>
      <Grid className="details-percentage" data-test="choice-percentage">
        <Text size="m" weight="bold" className="label">
          Percentage: &nbsp;
        </Text>
        <Text size="m">{percentage}%</Text>
      </Grid>
      <Grid className="details-vote" data-test="vote-choice">
        <Text size="m" weight="bold" className="label">
          Vote: &nbsp;
        </Text>
        <RadioButton
          id={radioButtonId}
          callbackValue={{ questionId, url, choiceId, id: radioButtonId, choiceName: choice }}
          onClick={onVoteClick}
          disabled={disabled}
          checked={checkedId === radioButtonId}
          data-test="vote-choice-radio"
        />
      </Grid>
    </QuestionChoiceCardWrapper>
  )
}

export default QuestionChoiceCard
