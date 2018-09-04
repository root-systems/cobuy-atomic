import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { TextField } from '@material-ui/core'

import schema from './schema'

const A009 = props => {
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

A009.propTypes = createPropTypes(schema)

export default A009
