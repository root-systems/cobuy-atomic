import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import TextField from '@material-ui/core/TextField'

import schema from './schema'

const A009 = props => {
  return (
    <TextField
      id={props.id}
      value={props.value}
      type={props.type}
      required={props.required}
      label={props.label}
      disabled={props.disabled}
      name={props.name}
      helperText={props.helperText}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      error={props.error}
      margin='normal'
      multiline={props.multiline}
      rowsMax={props.rowsmax}
      InputProps={{
        readOnly: props.readOnly
      }}
      FormHelperTextProps={{
        error: props.helpError
      }}
    />
  )
}

A009.propTypes = createPropTypes(schema)

export default A009
