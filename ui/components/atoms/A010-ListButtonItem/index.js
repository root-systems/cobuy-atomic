import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { ListItem, ListItemText } from '@material-ui/core'

import schema from './schema'

const A010 = props => {
  const { handleClick, primaryText } = props

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText primary={primaryText} />
    </ListItem>
  )
}

A010.propTypes = createPropTypes(schema)
export default A010
