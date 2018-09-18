import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import List from '@material-ui/core/List'

import schema from './schema'

const A013 = props => {
  const {children} = props

  return (
    <List>
      {children}
    </List>
  )
}

A013.propTypes = createPropTypes(schema)

export default A013
