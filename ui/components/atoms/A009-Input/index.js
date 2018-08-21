import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import {Input} from '@material-ui/core'

import schema from './schema'

const A009 = props => {
  return (
    <Input
      id={props.id}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
    />
  )
}

A009.propTypes = createPropTypes(schema)

export default A009
