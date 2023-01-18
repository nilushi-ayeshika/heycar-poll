import styled from 'styled-components'

export const QuestionScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .add-new-wrapper {
    position: relative;
  }

  @media (max-width: 920px) {
    .question-header-wrapper {
      align-items: center;
      flex-direction: column;
    }

    .add-button {
      margin: 0 0 2rem 0;
    }

    .questions-title {
      align-items: center;
      width: 24.5rem;
      padding: 0;
    }

    .questions-title {
      align-items: center;
      width: 24.5rem;
      padding: 0;
    }
  }

  @media (max-width: 516px) {
    .question-screen-wrapper {
      padding: 0 1.5rem;
    }
  }
`

export const AddNewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .close-button {
    height: 3rem;
    min-height: 3rem;
    border-radius: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 9;

    svg {
      margin-right: 0 !important;
    }
  }
`

export const customModalStyles = {
  content: {
    width: '40rem',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 2px 6px 1px rgba(0, 22, 99, 0.12)',
    border: 'none',
    maxHeight: 'calc(100vh - 100px)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
}
