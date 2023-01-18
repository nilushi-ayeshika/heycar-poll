import { forwardRef, useCallback } from 'react'

import Grid from '../../Layout/Grid/Grid.component'

import { ButtonProps } from './Button.types'
import ButtonStyles from './Button.theme'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    onClick,
    callbackValue,
    disabled,
    startIcon,
    endIcon,
    width,
    maxWidth,
    minWidth,
    fullWidth,
    height,
    padding,
    backgroundColor,
    textColor,
    size,
    hoverColor,
    margin,
    type,
  } = props

  const handleClick = useCallback(
    (e) => {
      const event = e
      onClick?.(callbackValue, event)
    },
    [onClick, callbackValue]
  )

  return (
    <ButtonStyles
      ref={ref}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      fullWidth={fullWidth}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
      hoverColor={hoverColor}
      margin={margin}
      type={type}
      data-test="button-component"
    >
      {startIcon ? (
        <Grid className="icon-wrapper" data-test="button-start-icon">
          {startIcon}
          {children}
        </Grid>
      ) : (
        children
      )}
    </ButtonStyles>
  )
})

Button.defaultProps = {
  startIcon: undefined,
  type: 'button',
}

export default Button
