import React, { useCallback, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Grid from '../../components/Layout/Grid/Grid.component'
import QuestionDetail from '../../components/QuestionDetails/QuestionDetail/QuestionDetail.component'
import Text from '../../components/Core/Text/Text.component'
import IconTitle from '../../components/Shared/IconTitle/IconTitle.component'
import { getQuestionDetails } from '../../features/QuestionDetails/actions'
import { selectors as questionDetailsState } from '../../features/QuestionDetails/reducer'
import Button from '../../components/Core/Button/Button.component'

import QuestionDetailsScreenWrapper from './QuestionDetailsScreen.theme'

const QuestionDetailsScreen: React.FC = (props: any) => {
  const { questionDetailsList, isListLoading } = props

  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { questionId } = params
  const qid = parseInt(questionId as string)

  const handleBackNavigation = useCallback(() => {
    navigate('/')
  }, [navigate])

  useEffect(() => {
    dispatch(getQuestionDetails(qid))
  }, [dispatch, qid])

  return (
    <QuestionDetailsScreenWrapper>
      <Grid
        className="question-inner-wrapper"
        data-test="question-inner-wrapper"
        alignItems="center"
        width="122.2rem"
        margin="4rem 0"
        direction="column"
      >
        <Grid justifyContent="space-between" className="details-header-wrapper">
          <IconTitle
            margin="0 0 4rem 0"
            icon={<FontAwesomeIcon icon={faList} />}
            backgroundColor="rgb(234, 93, 136)"
            className="questions-title"
            data-test="question-title"
          >
            <Text size="xl" className="details-title">
              Questions Detail
            </Text>
          </IconTitle>
          <Button
            onClick={handleBackNavigation}
            width="10rem"
            margin="0 0 4rem 0"
            className="vote-button"
            data-test="question-back-button"
            startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
          >
            <Text size="m" color="typo-white">
              Back
            </Text>
          </Button>
        </Grid>
        <QuestionDetail
          id={qid || 0}
          data={questionDetailsList}
          loading={isListLoading}
          data-test="question-detail-component"
        />
      </Grid>
    </QuestionDetailsScreenWrapper>
  )
}

const mapStateToProps = (state: any) => ({
  questionDetailsList: questionDetailsState.data(state),
  isListLoading: questionDetailsState.loading(state),
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsScreen)
