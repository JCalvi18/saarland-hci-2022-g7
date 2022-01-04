import { Colors } from './types'
import theme from './main'
import { createTheme } from '@material-ui/core'


const mainTypography = theme.typography


const muiTheme = createTheme({
  palette: {
    primary: {
      main: Colors.blue
    },
    secondary: {
      main: Colors.green
    }
  },

  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),

    h1: { ...mainTypography.h1 },
    h2: { ...mainTypography.h2 },
    h3: { ...mainTypography.h3 },
    h4: { ...mainTypography.h4 },
    h5: { ...mainTypography.h5 },
    h6: { ...mainTypography.h6 },
    subtitle1: { ...mainTypography.subtitle1 },
    subtitle2: { ...mainTypography.subtitle2 },
    body1: { ...mainTypography.body1 },
    body2: { ...mainTypography.body2 },
    caption: { ...mainTypography.caption },
    overline: { ...mainTypography.overline },
  },
})

export default muiTheme