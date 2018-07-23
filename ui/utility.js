import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';

import cobuyTheme from './theme'

export const muiThemeProvider = (story) => (
  <MuiThemeProvider muiTheme={cobuyTheme}>
    {story()}
  </MuiThemeProvider>
)