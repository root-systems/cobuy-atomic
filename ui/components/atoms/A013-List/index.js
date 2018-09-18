import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A012 = props => {
  return (
    <Fragment>
      <List>
        <ListItem button>
          <Icon iconname='cancel' />
          <ListItemText primary='Trash' />
        </ListItem>
        <ListItem button>
          <Icon iconname='menu' />
          <ListItemText primary='Spam' />
        </ListItem>
      </List>
    </Fragment>
  )
}

A012.propTypes = createPropTypes(schema)

export default A012
