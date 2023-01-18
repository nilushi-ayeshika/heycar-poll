export interface AddNewQuestionProps {
  className?: string
  onSubmitSuccess: () => any
}

export interface IAddNewFormValues {
  question: string
  choices: string[]
}
