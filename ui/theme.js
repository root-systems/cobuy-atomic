import { createMuiTheme } from '@material-ui/core/styles'
import { red, green, grey } from '@material-ui/core/colors'

export default createMuiTheme({
  themeName: 'Cobuy Theme',
  palette: {
    primary: green,
    secondary: grey,
    error: red
  }
})
