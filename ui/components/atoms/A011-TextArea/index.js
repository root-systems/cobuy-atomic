import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { TextField } from '@material-ui/core'

import schema from './schema'

const A011 = props => {
  const {
    id,
    value,
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
      multiline
      rows={3}
      rowsMax={10}
      type={'text'}
      margin='normal'
    />
  )
}

A011.propTypes = createPropTypes(schema)

export default A011
