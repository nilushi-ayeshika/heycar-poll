import styled from 'styled-components'

import { appTheme } from '../../../theme/Theme'
import { IconTitleProps } from './IconTitle.types'

export const IconWrapperStyles = styled.div`
  display: flex;
  width: 3.6rem;
  min-width: 3.6rem;
  height: 3.6rem;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  margin-right: 1.2rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
`

export const IconTitleStyles = styled.div<IconTitleProps>`
  display: flex;
  width: 100%;
  align-items: center;
  & > div:nth-child(1) {
    background: ${(props) =>
      props.backgroundColor ? props.backgroundColor : appTheme.colors.DEFAULT_ICON_BG};
  }
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  svg {
    color: ${(props) =>
      props.isLightIcon ? appTheme.colors.TYPHOGRAPHY_DARK : appTheme.colors.TYPHOGRAPHY_WHITE};
    font-size: ${appTheme.fontSizes.FONT_SIZE_L};
  }
`
