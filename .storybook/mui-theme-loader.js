import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';

import cobuyTheme from '../ui/theme'

export const muiThemeProvider = (story) => (
  <MuiThemeProvider theme={cobuyTheme}>
    {story()}
  </MuiThemeProvider>
)

export default muiThemeProvider