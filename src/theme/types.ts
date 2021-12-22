export enum Modes {
  Light = 'light',
  Dark = 'dark',
}
//TODO color naming can change
export enum Colors {
  purple = '#6b00fc',
  cyan = '#47e8dd',
  red = '#f7534b',
  yellow = '#fccb00',

  purpleLight = '#893eff',
  cyanLight = '#6cebe4',
  redLight = '#f9756f',
  yellowLight = '#fbe066',

  purpleDisabled = '#e7d8ff',
  cyanDisabled = '#e2fbfa',
  redDisabled = '#fee3e2',
  yellowDisabled = '#fff9e0',

  drawerHighlight = '#f9f5ff',

  black = "#272727",
  gray1 = '#4b4b4b',
  gray2 = '#838383',
  gray3 = '#d6d6d6',
  gray4 = '#f5f5f5',
  gray5 = '#fafafa',
  white = '#fff',
}

export type ThemeNames = 'light'

// From biggest to smallest
export type TypographyVariations =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'

export type ColorMap = Record<string, string>

export type Tones =
  | 'positive'
  | 'critical'
  | 'caution'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'muted'


export interface Typography {
  fontSize: string
  fontWeight: number
  lineHeight: string
  letterSpacing: string
}


export interface Theme {
  colors: typeof Colors
  colorMap: ColorMap
  name: string
  mode: Modes
  typography: Record<TypographyVariations, Typography>
}
