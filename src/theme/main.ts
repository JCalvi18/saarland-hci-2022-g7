import { Modes, Theme, Colors } from './types'

//Use color map for exceptional component theming
const colorMap: Record<string, Colors | string> = {
  'AppBar-foreground': Colors.white,
  'AppBar-background': Colors.white,
}

const theme: Theme = {
  colorMap,
  colors: Colors,
  mode: Modes.Light,
  name: 'main',
  typography: {

    h1: {
      fontSize: '64px',
      fontWeight: 500,
      lineHeight: '80px',
      letterSpacing: '-0.5px',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: '64px',
      letterSpacing: '0px',
    },
    h3: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '48px',
      letterSpacing: '0.2px',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '40px',
      letterSpacing: '0.2px',
    },
    h5: {
      fontSize: '24px',
      fontWeight: 400,
      lineHeight: '40px',
      letterSpacing: '0.2px',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '28px',
      letterSpacing: '0.2px',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '22px',
      letterSpacing: '0.25px',
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '19px',
      letterSpacing: '0.3px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '21px',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '19px',
      letterSpacing: '0.3px',
    },
    caption: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '15px',
      letterSpacing: '0.4px',
    },
    overline: {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.6px',
    },
  }
}

export default theme
