import QuestionApi from '../api/QuestionApi'

class QuestionAPIService {
  saveVotes = async (question_id: number, choice_id: number, url: string, choice: string) => {
    try {
      const { data } = await QuestionApi.saveQuestionVotes(question_id, choice_id, url, choice)
      return data
    } catch (error) {
      throw error
    }
  }

  addNewQuestion = async (question: string, choices: string[]) => {
    try {
      const { data } = await QuestionApi.addNewQuestion(question, choices)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new QuestionAPIService()
