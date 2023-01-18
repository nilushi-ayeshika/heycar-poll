import styled from 'styled-components'

import { getColor, getFontSize } from '../../../utils/theme.utils'

import { ButtonProps } from './Button.types'

const ButtonStyles = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.fontWeight.FONT_WEIGHT_MEDIUM};
  color: ${(props) => getColor(props.textColor) || props.theme.colors.TYPHOGRAPHY_WHITE};
  background: ${(props) => getColor(props.backgroundColor) || props.theme.colors.BUTTON_PRIMARY};
  border: none;
  cursor: pointer;
  padding: ${(props) => (props.padding ? props.padding : '0.5rem 1.5rem')};
  border-radius: 0.6rem;
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  min-height: 4.5rem;
  min-width: ${(props) => (props.minWidth ? props.minWidth : '2rem')};
  font-size: ${(props) => (props.size ? getFontSize(props.size) : '1.4rem')};

  &:hover {
    background: ${(props) =>
      getColor(props.hoverColor) || props.theme.colors.BUTTON_PRIMARY_HOVERED};
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
    background: background: ${(props) =>
      getColor(props.backgroundColor) || props.theme.colors.BUTTON_PRIMARY};
  }

  .icon-wrapper {
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 1rem;
    }
  }
`

export default ButtonStyles
