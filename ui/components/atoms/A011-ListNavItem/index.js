import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { ListItem, ListItemText } from '@material-ui/core'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A011 = props => {
  const { handleClick, primaryText, secondaryText } = props

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText primary={primaryText} secondary={secondaryText} />
      <Icon iconname='chevron_right' />
    </ListItem>
  )
}

A011.propTypes = createPropTypes(schema)
export default A011
