import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

const label = props => {
  return <h4>{props.label}</h4>
}

label.prototype = createPropTypes(schema)

export default label
