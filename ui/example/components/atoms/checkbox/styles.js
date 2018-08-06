import theme from '../../../../theme'

// export a function that has the current theme injected into it
export default (theme) => ({
  error: {
    '--wired-checkbox-icon-color': theme.palette.error.main
  },
  done: {
    '--wired-checkbox-icon-color': 'green'
  }
})