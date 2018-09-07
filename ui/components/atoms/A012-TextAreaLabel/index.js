import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { TextField } from '@material-ui/core'

import schema from './schema'

const A012 = props => {
  const {
    id,
    value,
    required,
    disabled,
    name,
    label,
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
      required={required}
      disabled={disabled}
      name={name}
      label={label}
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
      multiline
      rows={3}
      rowsMax={10}
      type={'text'}
      margin='normal'
    />
  )
}

A012.propTypes = createPropTypes(schema)

export default A012
