import React, { useCallback } from 'react'

import { TextProps } from './Text.types'
import TextStyles from './Text.theme'

const Text: React.FC<TextProps> = (props) => {
  const {
    size,
    weight,
    color,
    textAlign,
    margin,
    textDecoration,
    textTransform,
    lineHeight,
    lineClamp,
    letterSpacing,
    className,
    onClick,
    cursor,
    callbackValue,
    children,
  } = props

  const handleClick = useCallback(() => {
    onClick?.(callbackValue)
  }, [callbackValue, onClick])

  return (
    <TextStyles
      size={size}
      weight={weight}
      color={color}
      textAlign={textAlign}
      margin={margin}
      textDecoration={textDecoration}
      textTransform={textTransform}
      lineHeight={lineHeight}
      lineClamp={lineClamp}
      letterSpacing={letterSpacing}
      className={className}
      callbackValue={callbackValue}
      onClick={handleClick}
      cursor={cursor}
      data-test="text-component"
    >
      {children}
    </TextStyles>
  )
}

export default Text
