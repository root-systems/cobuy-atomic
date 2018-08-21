import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import {TextField} from '@material-ui/core'

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
      error={props.error}
      helperText={props.helperText}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      margin='normal'
      InputProps={{
        readOnly: props.readOnly
      }}
    />
  )
}

A009.propTypes = createPropTypes(schema)

export default A009
