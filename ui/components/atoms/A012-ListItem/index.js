import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import ListItem from '@material-ui/core/ListItem'

import schema from './schema'

const A012 = props => {
  return (
    <ListItem button>
      {props.children}
    </ListItem>
  )
}

A012.propTypes = createPropTypes(schema)

export default A012
