import React, { useCallback, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import Grid from '../../../components/Layout/Grid/Grid.component'
import Text from '../../Core/Text/Text.component'
import IconTitle from '../../Shared/IconTitle/IconTitle.component'
import QuestionChoicesList from '../QuestionChoicesList/QuestionChoicesList.component'
import Button from '../../Core/Button/Button.component'
import { generateRandomColors, isLightColor } from '../../../utils/theme.utils'
import QuestionAPIService from '../../../services/Questions'
import { getQuestionDetails } from '../../../features/QuestionDetails/actions'

import { IDetails } from './QuestionDetail.types'
import QuestionDetailsWrapper from './QuestionDetail.theme'

const QuestionDetail: React.FC<IDetails> = (props) => {
  const { data, loading, id } = props
  const iconBgColor = generateRandomColors(data?.question || 'default question')
  const dispatch = useDispatch()

  const [selectedChoice, setSelectedChoice] = useState<any>(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const handleSaveVotes = useCallback(async () => {
    const { questionId, choiceId, url, choiceName } = selectedChoice || {};
    const choice = choiceName

    setButtonDisabled(true)

    const apiData = await QuestionAPIService.saveVotes(questionId, choiceId, url, choice)

    if (apiData) {
      dispatch(getQuestionDetails(questionId))
      setSelectedChoice(null)
      toast.success('Vote saved successfully', { autoClose: 1500 })
    }

    setButtonDisabled(false)
  }, [dispatch, selectedChoice])

  const handleVoteClick = useCallback((value) => {
    setSelectedChoice(value)
  }, [])

  return (
    <Grid direction="column">
      <QuestionDetailsWrapper>
        <Grid className="vote-body-wrapper" data-test="question-detail-wrapper">
          <Grid>
            <IconTitle
              icon={<FontAwesomeIcon icon={faQuestion} />}
              className="card-icon-title"
              backgroundColor={iconBgColor}
              isLightIcon={isLightColor(iconBgColor)}
              data-test="question-icon"
            >
              <Grid className="question-wrapper">
                <Text size="l" weight="bold">
                  Question: &nbsp;
                </Text>
                <Text size="l" data-test="question-title">
                  {data?.question}
                </Text>
              </Grid>
            </IconTitle>
          </Grid>
          <QuestionChoicesList
            id={id}
            data={data?.choices}
            dataLoading={loading}
            onHandleVoteClick={handleVoteClick}
            checkedChoiceId={selectedChoice?.id}
            data-test="question-choices-component"
          />
        </Grid>
        <Button
          onClick={handleSaveVotes}
          width="20rem"
          margin="4rem 0"
          className="vote-button"
          disabled={buttonDisabled || selectedChoice === null}
          data-test="question-vote-button"
        >
          <Text size="m" color="typo-white">
            Save Votes
          </Text>
        </Button>
      </QuestionDetailsWrapper>
    </Grid>
  )
}

export default QuestionDetail
