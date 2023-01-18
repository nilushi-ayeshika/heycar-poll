export const appTheme = {
  colors: {
    TYPHOGRAPHY_DARK: '#000000',
    TYPHOGRAPHY_WHITE: '#FFFFFF',
    TYPOGRAPHY_ERROR: '#FF0000',

    BUTTON_PRIMARY: 'rgba(21, 139, 234, 1)',
    BUTTON_PRIMARY_HOVERED: 'rgba(2, 87, 215, 1)',

    BUTTON_SECONDARY: 'rgb(11, 163, 96)',
    BUTTON_SECONDARY_HOVERED: 'rgb(6, 132, 76)',

    DEFAULT_ICON_BG: 'rgb(246, 157, 27)',

    DEFAULT_CARD_BG: '#FCFBFA',

    GRID_ROW_BG: 'rgba(240, 248, 255, 1)',
  },

  fontSizes: {
    FONT_SIZE_XXS: '1rem', // ~10px
    FONT_SIZE_XS: '1.2rem', // ~12px
    FONT_SIZE_S: '1.4rem', // ~14px
    FONT_SIZE_M: '1.5rem', // ~15px
    FONT_SIZE_XMS: '1.6rem', // ~16px
    FONT_SIZE_XM: '1.7rem', // ~17px
    FONT_SIZE_L: '1.8rem', // ~18px
    FONT_SIZE_XL: '3.6rem', // ~46px
  },

  fontWeight: {
    FONT_WEIGHT_REGULAR: '400',
    FONT_WEIGHT_MEDIUM: '500',
    FONT_WEIGHT_BOLD: '800',
  },
}

export type AppTheme = typeof appTheme
