import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

const A003 = props => {
  return <Icon color={props.color} />
}

A003.propTypes = createPropTypes(schema)

export default A003

// add more properties from schema
