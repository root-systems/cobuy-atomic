import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: grey,
    error: red
  },
  themeName: 'Cobuy Theme'
})