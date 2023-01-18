import { appTheme } from '../theme/Theme'

export type TextSizeType = 'xxs' | 'xs' | 's' | 'm' | 'xms' | 'xm' | 'l' | 'xl' | undefined

export const getFontSize = (size: TextSizeType) => {
  switch (size) {
    case 'xxs':
      return appTheme.fontSizes.FONT_SIZE_XXS
    case 'xs':
      return appTheme.fontSizes.FONT_SIZE_XS
    case 's':
      return appTheme.fontSizes.FONT_SIZE_S
    case 'm':
      return appTheme.fontSizes.FONT_SIZE_M
    case 'xms':
      return appTheme.fontSizes.FONT_SIZE_XMS
    case 'xm':
      return appTheme.fontSizes.FONT_SIZE_XM
    case 'l':
      return appTheme.fontSizes.FONT_SIZE_L
    case 'xl':
      return appTheme.fontSizes.FONT_SIZE_XL
    default:
      return appTheme.fontSizes.FONT_SIZE_M
  }
}

export type ColorType =
  | 'typo-black'
  | 'typo-white'
  | 'button-primary'
  | 'button-secondary'
  | 'button-secondary-hover'
  | undefined

export const getColor = (color: ColorType) => {
  switch (color) {
    case 'typo-black':
      return appTheme.colors.TYPHOGRAPHY_DARK
    case 'typo-white':
      return appTheme.colors.TYPHOGRAPHY_WHITE
    case 'button-primary':
      return appTheme.colors.BUTTON_PRIMARY
    case 'button-secondary':
      return appTheme.colors.BUTTON_SECONDARY
    case 'button-secondary-hover':
      return appTheme.colors.BUTTON_SECONDARY_HOVERED
    default:
      return color
  }
}

/**
 * Generates color for the string provided.
 * @param {*} str
 */

export const generateRandomColors = (str: string) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += `00${value.toString(16)}`.substr(-2)
  }
  return colour
}

/**
 * Determine if a color is light or dark,
 *
 * @static
 * @param color
 * @returns true if light
 */
export const isLightColor = (color: any) => {
  let r
  let g
  let b

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)
    ;[r, g, b] = color
  } else {
    // If RGB, then Convert it to HEX: http://gist.github.com/983661
    color = +`0x${color.slice(1).replace(color.length < 5 && /./g, '$&$&')}`

    r = color >> 16
    g = (color >> 8) & 255
    b = color & 255
  }

  // HSP equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return true
  }

  return false
}
