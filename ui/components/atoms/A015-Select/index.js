import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { TextField } from '@material-ui/core'

import schema from './schema'
import styles from './styles'

const A015 = props => {
  const {id, value, required, disabled, name, handleChange, readOnly, error, classes, children} = props
  const shownHelperText = error ? 'Select an option' : null
  return (
    <TextField
      id={id}
      value={value}
      required={required}
      disabled={disabled}
      name={name}
      onChange={handleChange}
      InputProps={{
        readOnly: readOnly
      }}
      error={error}
      FormHelperTextProps={{
        error: error
      }}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      helperText={shownHelperText}
      className={classes.formField}
      margin='normal'
      select
    >
      {children}
    </TextField>
  )
}

A015.propTypes = createPropTypes(schema)

export default withStyles(styles)(A015)
