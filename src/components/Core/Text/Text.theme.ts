import styled from 'styled-components'

import { getFontSize, getColor } from '../../../utils/theme.utils'
import { TextProps } from './Text.types'

const TextStyles = styled.p<TextProps>`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: 0;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  color: ${(props) => (props.color ? getColor(props.color) : props.theme.colors.TYPHOGRAPHY_DARK)};

  line-height: ${(props) => props.lineHeight || 'unset'};

  ${(props) => props.cursor && 'cursor: pointer;'};

  font-weight: ${(props) => {
    switch (props.weight) {
      case 'regular':
        return props.theme.fontWeight.FONT_WEIGHT_REGULAR
      case 'medium':
        return props.theme.fontWeight.FONT_WEIGHT_MEDIUM
      case 'bold':
        return props.theme.fontWeight.FONT_WEIGHT_BOLD
      default:
        return props.theme.fontWeight.FONT_WEIGHT_REGULAR
    }
  }};

  font-size: ${(props) => (props.size ? getFontSize(props.size) : '1.4rem')};

  text-decoration: ${(props) => {
    switch (props.textDecoration) {
      case 'underline':
        return 'underline'
      case 'overline':
        return 'overline'
      case 'line-through':
        return 'line-through'
      default:
    }
  }};

  text-transform: ${(props) => {
    switch (props.textTransform) {
      case 'capitalize':
        return 'capitalize'
      case 'lowercase':
        return 'lowercase'
      case 'uppercase':
        return 'uppercase'
    }
  }};

  ${(props) => {
    if (props.lineClamp) {
      return `
      display: -webkit-box;
      -webkit-line-clamp: ${props.lineClamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `
    }
  }};

  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
`

export default TextStyles
