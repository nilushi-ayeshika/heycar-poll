import { forwardRef } from 'react'

import { GridProps } from './Grid.types'
import GridStyles from './Grid.theme'

const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const {
    direction,
    justifyContent,
    alignItems,
    margin,
    width,
    minWidth,
    minHeight,
    maxWidth,
    padding,
    height,
    children,
    flexWrap,
    flex,
    className,
    borderRadius,
    boxShadow,
  } = props

  return (
    <GridStyles
      ref={ref}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      padding={padding}
      height={height}
      flexWrap={flexWrap}
      className={className}
      flex={flex}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
    >
      {children}
    </GridStyles>
  )
})

export default Grid
