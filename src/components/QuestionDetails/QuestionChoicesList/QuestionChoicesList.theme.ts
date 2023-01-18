import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

const QuestionChoiceListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 50rem;

  .ques-card {
    &:nth-child(2n) {
      background-color: ${appTheme.colors.GRID_ROW_BG};
    }
`

export default QuestionChoiceListWrapper
