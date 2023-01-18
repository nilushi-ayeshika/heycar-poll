import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

const QuestionDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  .vote-body-wrapper {
    display: flex;
    border-radius: 2rem;
    flex-direction: column;
    box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  }

  .card-icon-title {
    background-color: ${appTheme.colors.DEFAULT_CARD_BG};
    padding: 1.8rem;
    min-height: 6.6rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  .ques-card-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    .ques-card {
      &:nth-child(2n) {
        background-color: ${appTheme.colors.GRID_ROW_BG};
      }
    }
  }

  .vote-button {
    align-self: flex-end;
  }

  @media (max-width: 914px) {
    .question-wrapper {
      flex-direction: column;
      padding-left: 2rem;
    }
  }
`

export default QuestionDetailsWrapper
