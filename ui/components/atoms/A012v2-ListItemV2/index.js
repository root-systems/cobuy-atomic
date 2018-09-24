import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A012v2 = props => {
  const { iconname, primarytext } = props

  return (
    <ListItem button>
      {iconname && <Icon iconname={iconname} />}
      <ListItemText primary={primarytext} />
    </ListItem>
  )
}

A012v2.propTypes = createPropTypes(schema)
export default A012v2
