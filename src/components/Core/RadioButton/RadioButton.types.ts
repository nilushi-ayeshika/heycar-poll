import React from 'react'

export interface RadioButtonProps {
  id: string
  name?: string
  className?: string
  checked?: boolean
  onClick?: (event: React.ChangeEvent<HTMLInputElement>, callbackValue: any) => any
  callbackValue: any
  disabled?: boolean
}
