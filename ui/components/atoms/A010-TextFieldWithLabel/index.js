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
      label={props.label}
      error={props.error}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      margin='normal'
      multiline={props.multiline}
      rowsMax={props.rowsMax}
      InputProps={{
        readOnly: props.readOnly
      }}
    />
  )
}

A010.propTypes = createPropTypes(schema)

export default A010
