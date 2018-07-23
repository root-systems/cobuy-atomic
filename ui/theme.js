import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
        light: 'red',
        main: 'blue',
        dark: 'darkGreen',
        contrastText: '#fff',
    },
    secondary: {
        light: 'black',
        main: 'blue',
        dark: 'purple',
        contrastText: '#fff',
    }
  },
  themeName: 'Cobuy Theme'
})