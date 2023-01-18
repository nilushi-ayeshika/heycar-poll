import styled from 'styled-components'

import { GridProps } from './Grid.types'

const GridStyles = styled.div<GridProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  width: ${(props) => (props.width ? props.width : '100%')};
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap}`};
  ${(props) => props.margin && `margin: ${props.margin}`};
  ${(props) => props.minWidth && `min-width: ${props.minWidth}`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}`};
  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
  ${(props) => props.padding && `padding: ${props.padding}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius}`};
  ${(props) => props.boxShadow && `box-shadow: ${props.boxShadow}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
`

export default GridStyles
