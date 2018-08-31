import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { TextField } from '@material-ui/core'

import schema from './schema'

const A011 = props => {
  return (
    <TextField
      id={props.id}
      value={props.value}
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
