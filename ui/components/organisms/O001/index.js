import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

const O001 = props => {
  return (
    // TODO
    <div />
  )
}

O001.propTypes = createPropTypes(schema)

export default O001
