import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import ListItemText from '@material-ui/core/ListItemText'

import schema from './schema'

const A011 = props => {
  return (
    <ListItemText
      primary={props.primary}
      iconname='cancel'
    />
  )
}

A011.propTypes = createPropTypes(schema)

export default A011
