import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'

export const AddNewQuestionWrapper = styled.div`
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  .formik-label {
    margin-bottom: 1rem;
  }

  .formik-field {
    height: 4rem;
    padding: 0 1rem;
    width: 100%;
    border: 1px solid #ddd;
  }

  .add-choice-button {
    min-height: 2.5rem;
  }

  .formik-error-label {
    font-size: ${appTheme.fontSizes.FONT_SIZE_XS};
    color: ${appTheme.colors.TYPOGRAPHY_ERROR};
    margin-top: 0.2rem;
  }

  .remove-button {
    height: 3rem;
    min-height: 3rem;
    border-radius: 100%;
    margin-left: 2rem;

    svg {
      margin-right: 0 !important;
    }
  }

  .info-message {
    font-style: italic;
  }
`
