import React from 'react'

import { TextSizeType, ColorType } from '../../../utils/theme.utils'

type TextWeightType = 'light' | 'regular' | 'medium' | 'bold' | undefined
type TextAlignType = 'left' | 'right' | 'center' | 'justify' | undefined
type TextDecorationType = 'underline' | 'overline' | 'line-through' | undefined
type TextTransformType = 'uppercase' | 'capitalize' | 'lowercase' | undefined

export interface TextProps {
  size?: TextSizeType
  weight?: TextWeightType
  color?: ColorType
  textAlign?: TextAlignType
  margin?: string
  textDecoration?: TextDecorationType
  textTransform?: TextTransformType
  lineHeight?: string | number
  lineClamp?: number
  letterSpacing?: string | number
  className?: string
  callbackValue?: any
  onClick?: (callbackValue: any) => any
  cursor?: 'default' | 'pointer'
  children: React.ReactNode
}
