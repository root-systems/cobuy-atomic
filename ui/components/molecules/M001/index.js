import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Icon from '../../atoms/A003-Icons'

const styles = {}

const M001 = props => {
  return (
    <Icon iconname='hamburger' />
  )
}

M001.propTypes = createPropTypes(schema)

export default M001
