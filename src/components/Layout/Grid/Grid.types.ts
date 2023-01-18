import React from 'react'

export interface GridProps {
  direction?: FlexDirectionType
  justifyContent?: FlexJustifyContent
  alignItems?: FlexAlignItems
  margin?: string
  width?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  children?: React.ReactNode
  padding?: string
  height?: string
  flexWrap?: FlexWrap
  className?: string
  borderRadius?: string
  boxShadow?: string
  flex?: number
}

type FlexDirectionType = 'row' | 'column'

type FlexWrap = 'wrap' | 'no-wrap' | 'wrap-reverse'

type FlexJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type FlexAlignItems =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
