import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { ListItem, ListItemText, Checkbox } from '@material-ui/core'
import Avatar from '../A018-Avatar'

import schema from './schema'

const A012 = props => {
  const { handleClick, primaryText, secondaryText, avatar, ...other } = props

  return (
    <ListItem button onClick={handleClick}>
      <Avatar
        alt={avatar.alt}
        src={avatar.src}
        text={avatar.text}
        iconname={avatar.iconname}
      />
      <ListItemText primary={primaryText} secondary={secondaryText} />
      <Checkbox {...other} />
    </ListItem>
  )
}

A012.propTypes = createPropTypes(schema)
export default A012
