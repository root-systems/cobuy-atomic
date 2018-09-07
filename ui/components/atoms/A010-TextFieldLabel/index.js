import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { TextField } from '@material-ui/core'

import schema from './schema'

const A010 = props => {
  const {
    id,
    value,
    type,
    required,
    disabled,
    name,
    placeholder,
    onChange,
    label,
    helperText,
    error,
    readOnly
  } = props

  return (
    <TextField
      id={id}
      value={value}
      type={type}
      required={required}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      label={label}
      helperText={helperText}
      error={error}
      FormHelperTextProps={{
        error: error
      }}
      InputProps={{
        readOnly: readOnly
      }}
      margin='normal'
    />
  )
}

A010.propTypes = createPropTypes(schema)

export default A010
