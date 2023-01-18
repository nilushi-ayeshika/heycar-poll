import React from 'react'

import { TextSizeType, ColorType } from '../../../utils/theme.utils'

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: (callbackValue?: any, event?: any) => any
  callbackValue?: any
  disabled?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  fullWidth?: boolean
  width?: string
  maxWidth?: string
  minWidth?: string
  margin?: string
  height?: string
  padding?: string
  backgroundColor?: ColorType
  textColor?: ColorType
  hoverColor?: ColorType
  size?: TextSizeType
  type?: 'button' | 'reset' | 'submit'
}

export enum ButtonTheme {
  primary = 'primary',
  secondary = 'secondary',
}
