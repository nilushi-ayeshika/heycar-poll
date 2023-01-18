import React from 'react'
import { Routes, Route } from 'react-router-dom'

import QuestionScreen from '../containers/Questions/QuestionsScreen'
import QuestionDetailsScreen from '../containers/QuestionDetailsScreen/QuestionDetailsScreen'
import RouteHelper from '../helpers/RouteHelper'

const RouteConfig = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<QuestionScreen questionList={[]} isListLoading={false} nextPageLink="" />}
      />
      <Route
        path={`${RouteHelper.QUESTION_DETAILS_PATH}/:questionId`}
        element={<QuestionDetailsScreen />}
      />
    </Routes>
  )
}

export default RouteConfig
