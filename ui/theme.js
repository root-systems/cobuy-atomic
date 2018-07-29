import { createMuiTheme } from '@material-ui/core/styles'
import { red, green, grey } from '@material-ui/core/colors'

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: grey,
    error: red
  },
  themeName: 'Cobuy Theme'
})