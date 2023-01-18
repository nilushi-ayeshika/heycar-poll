import React, { useCallback, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons'

import Grid from '../../Layout/Grid/Grid.component'
import QuestionAPIService from '../../../services/Questions'
import { getQuestionList } from '../../../features/Questions/actions'
import Button from '../../../components/Core/Button/Button.component'
import Text from '../../../components/Core/Text/Text.component'

import { AddNewQuestionProps, IAddNewFormValues } from './AddNewQuestion.types'
import { AddNewQuestionWrapper } from './AddNewQuestion.theme'

const AddNewQuestion: React.FC<AddNewQuestionProps> = (props) => {
  const { className, onSubmitSuccess } = props

  const dispatch = useDispatch()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const initialValues: IAddNewFormValues = { question: '', choices: ['', ''] }

  const handleSubmit = useCallback(async (values, actions) => {
    actions.setSubmitting(false)
    setButtonDisabled(true)

    const apiData = await QuestionAPIService.addNewQuestion(values.question, values.choices)

    if (apiData) {
      dispatch(getQuestionList(1))
      toast.success('Question added successfully', { autoClose: 1500 })
    }

    setButtonDisabled(false)
    onSubmitSuccess()
  }, [dispatch, onSubmitSuccess])

  const schema = Yup.object().shape({
    question: Yup.string().trim().required('Required Field'),
    choices: Yup.array().of(Yup.string().trim().required('Required Field')),
  })

  return (
    <AddNewQuestionWrapper className={className} data-test="add-new-question-wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
        validationSchema={schema}
      >
        {({ values }: any) => (
          <Form data-test="add-new-question-form">
            <Grid direction="column">
              <label htmlFor="question" className="formik-label">
                Question:
              </label>
              <Field
                id="question"
                name="question"
                placeholder="Question"
                className="formik-field"
                data-test="question-field"
              />
              <ErrorMessage
                name="question"
                component="div"
                className="formik-error-label"
                data-test="question-field-error"
              />
            </Grid>
            <FieldArray name="choices" data-test="question-choices-fields">
              {({ remove, push }) => (
                <Grid direction="column">
                  {values.choices.length > 0 &&
                    values.choices.map((choice: string, index: number) => (
                      <Grid key={index} direction="column">
                        <Grid direction="column" margin="2rem 0 0 0">
                          <label htmlFor={`choices.${index}`} className="formik-label">
                            Choice {index + 1}:
                          </label>
                          <Grid alignItems="center">
                            <Field
                              name={`choices.${index}`}
                              placeholder="Choice Name"
                              className="formik-field"
                              data-test="question-choices-field-item"
                            />
                            {index > 1 && (
                              <Button
                                onClick={() => remove(index)}
                                width="2rem"
                                startIcon={<FontAwesomeIcon icon={faTimes} />}
                                backgroundColor="button-secondary"
                                hoverColor="button-secondary-hover"
                                className="remove-button"
                                data-test="question-choices-field-remove-more"
                              />
                            )}
                          </Grid>
                          <ErrorMessage
                            name={`choices.${index}`}
                            component="div"
                            className="formik-error-label"
                            data-test="question-choices-field-error"
                          />
                        </Grid>
                      </Grid>
                    ))}
                  <Button
                    width="14rem"
                    height="3.5rem"
                    margin="2rem 0 0 0"
                    className="add-choice-button"
                    onClick={() => push('')}
                    disabled={values.choices.length === 4}
                    startIcon={<FontAwesomeIcon icon={faPlus} />}
                    backgroundColor="button-secondary"
                    hoverColor="button-secondary-hover"
                    data-test="question-choices-field-add-more"
                  >
                    <Text size="m" color="typo-white">
                      Add Choice
                    </Text>
                  </Button>
                  <Text
                    className="info-message"
                    size="xs"
                    margin="1rem 0 2rem 0"
                    data-test="add-new-question-form-note"
                  >
                    You can add only maximum 04 choices
                  </Text>
                </Grid>
              )}
            </FieldArray>
            <Grid justifyContent="flex-end">
              <Button
                type="submit"
                width="15rem"
                height="4.5rem"
                margin="4rem 0 0 0"
                disabled={buttonDisabled}
                data-test="add-new-question-submit-button"
              >
                <Text size="m" color="typo-white">
                  Add
                </Text>
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </AddNewQuestionWrapper>
  )
}

export default AddNewQuestion
