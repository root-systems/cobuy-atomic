import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
        light: '#81C784',
        main: '#00838F',
        dark: '#004D40',
        contrastText: '#fff',
    },
    secondary: {
        light: '#FFD54F',
        main: '#FDD835',
        dark: '#F57C00',
        contrastText: '#fff',
    }
  },
  themeName: 'Cobuy Theme'
})