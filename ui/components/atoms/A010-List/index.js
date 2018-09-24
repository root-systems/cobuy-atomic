import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { List } from '@material-ui/core'

import schema from './schema'

const A010 = props => {
  const { children } = props

  return <List>{children}</List>
}

A010.propTypes = createPropTypes(schema)

export default A010
