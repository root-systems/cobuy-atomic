import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Icon from '../../particles/P001-Icon'

const M001 = props => {
  return <Icon iconname='hamburger' />
}

M001.propTypes = createPropTypes(schema)

export default M001
