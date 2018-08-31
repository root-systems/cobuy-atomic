import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { TextField } from '@material-ui/core'

import schema from './schema'

const A010 = props => {
  return (
    <TextField
      id={props.id}
      value={props.value}
      type={props.type}
      required={props.required}
      disabled={props.disabled}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      label={props.label}
      helperText={props.helperText}
      error={props.error}
      FormHelperTextProps={{
        error: props.error
      }}
      InputProps={{
        readOnly: props.readOnly
      }}
      margin='normal'
    />
  )
}

A010.propTypes = createPropTypes(schema)

export default A010
