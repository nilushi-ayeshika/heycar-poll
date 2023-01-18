import React, { useCallback, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'

import Grid from '../../components/Layout/Grid/Grid.component'
import QuestionList from '../../components/Questions/QuestionList/QuestionList'
import Text from '../../components/Core/Text/Text.component'
import IconTitle from '../../components/Shared/IconTitle/IconTitle.component'
import { getQuestionList } from '../../features/Questions/actions'
import { selectors as questionState } from '../../features/Questions/reducer'
import Button from '../../components/Core/Button/Button.component'
import AddNewQuestion from '../../components/Questions/AddNewQuestion/AddNewQuestion.component'
import Modal from '../../components/Shared/Modal/Modal.component'

import { QuestionScreenWrapper, customModalStyles, AddNewWrapper } from './QuestionsScreen.theme'
import { IQuestionScreenProps } from './QuestionsScreen.types'

const QuestionScreen: React.FC<IQuestionScreenProps> = (props) => {
  const { questionList, isListLoading, nextPageLink } = props

  const dispatch = useDispatch()

  const [pageCount, setPageCount] = useState(1)
  const [isAddNewOpen, setIsAddNewOpen] = useState(false)
  const moreDataAvailable = nextPageLink?.includes('next')

  const handleNextPageRequest = useCallback(() => {
    if (!isListLoading && moreDataAvailable) {
      setPageCount(pageCount + 1)
      dispatch(getQuestionList(pageCount + 1))
    }
  }, [isListLoading, moreDataAvailable, pageCount, dispatch])

  const handleOpenAddNewModal = useCallback(() => {
    setIsAddNewOpen(true)
  }, [])

  const handleCloseAddNewModal = useCallback(() => {
    setIsAddNewOpen(false)
  }, [])

  const handleOnSubmitSuccess = useCallback(() => {
    setIsAddNewOpen(false)
  }, [])

  useEffect(() => {
    setPageCount(1)
    dispatch(getQuestionList(pageCount))
  }, [dispatch, pageCount])

  return (
    <QuestionScreenWrapper>
      <Grid
        alignItems="center"
        margin="4rem 0"
        padding="0 5rem"
        direction="column"
        className="question-screen-wrapper"
        data-test="questions-screen-wrapper"
      >
        <Grid className="question-header-wrapper">
          <IconTitle
            margin="0 0 4rem 0"
            icon={<FontAwesomeIcon icon={faRocket} />}
            className="questions-title"
            data-test="questions-title"
          >
            <Text size="xl">Questions</Text>
          </IconTitle>
          <Button
            data-test="add-new-button"
            onClick={handleOpenAddNewModal}
            width="20rem"
            height="4.5rem"
            className="add-button"
            startIcon={<FontAwesomeIcon icon={faPlus} />}
          >
            <Text size="m" color="typo-white">
              Add New
            </Text>
          </Button>
        </Grid>
        <QuestionList
          data={questionList}
          bottomHitThreshold={50}
          dataLoading={isListLoading}
          onNextPageRequested={handleNextPageRequest}
          hasMoreData={moreDataAvailable}
          data-test="questions-component"
          pageCount={pageCount}
        />
      </Grid>
      {isAddNewOpen && (
        <Modal
          modalIsOpen={isAddNewOpen}
          closeModal={handleCloseAddNewModal}
          style={customModalStyles}
          data-test="add-new-question-modal"
        >
          <Grid direction="column">
            <AddNewWrapper>
              <Text size="l" margin="0 0 3rem 0">
                Add New Question
              </Text>
              <Button
                onClick={handleCloseAddNewModal}
                width="2rem"
                className="close-button"
                startIcon={<FontAwesomeIcon icon={faTimes} />}
              />
            </AddNewWrapper>
            <AddNewQuestion onSubmitSuccess={handleOnSubmitSuccess} />
          </Grid>
        </Modal>
      )}
    </QuestionScreenWrapper>
  )
}

const mapStateToProps = (state: any) => ({
  questionList: questionState.data(state),
  isListLoading: questionState.loading(state),
  nextPageLink: questionState.nextPageLink(state),
})

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
