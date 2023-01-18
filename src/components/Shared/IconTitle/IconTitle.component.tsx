import React from 'react'

import { IconTitleProps } from './IconTitle.types'
import { IconWrapperStyles, IconTitleStyles } from './IconTitle.theme'

const IconTitle: React.FC<IconTitleProps> = (props) => {
  const { className, icon, backgroundColor, children, margin, padding, isLightIcon } = props

  return (
    <IconTitleStyles
      className={className}
      icon={icon}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      isLightIcon={isLightIcon}
      data-test="icon-title-component"
    >
      <IconWrapperStyles data-test="icon">{icon}</IconWrapperStyles>
      {children}
    </IconTitleStyles>
  )
}

export default IconTitle
