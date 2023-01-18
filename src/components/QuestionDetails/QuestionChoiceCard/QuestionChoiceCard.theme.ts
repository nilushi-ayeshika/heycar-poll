import styled from 'styled-components'

const QuestionChoiceCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 6.5rem;
  align-items: center;
  padding: 0 2rem;
  width: 100%;

  .details-choice {
    display: flex;
    width: 40%;
  }

  .details-vote-amount {
    display: flex;
    width: 20%;
    justify-content: center;
  }

  .details-percentage {
    display: flex;
    width: 20%;
    justify-content: center;
  }

  .details-vote {
    display: flex;
    width: 20%;
    justify-content: center;
  }

  .label {
    align-items: center;
    display: flex;
    display: none;
  }

  @media (max-width: 914px) {
    .details-vote-amount,
    .details-percentage,
    .details-vote,
    .details-choice {
      width: 100%;
      justify-content: flex-start;
      margin-bottom: 2rem;
    }

    .details-choice {
      margin-top: 2rem;
    }

    .label {
      display: flex;
    }

    min-height: auto;
  }
`

export default QuestionChoiceCardWrapper
