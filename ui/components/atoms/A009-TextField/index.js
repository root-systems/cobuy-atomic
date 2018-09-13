import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { TextField } from 'formik-material-ui'

import schema from './schema'

const A009 = props => {
  const {
    id,
    value,
    type,
    required,
    disabled,
    name,
    placeholder,
    onChange,
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

A009.propTypes = createPropTypes(schema)

export default A009
