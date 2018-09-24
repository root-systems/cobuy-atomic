import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { isNil, isEmpty } from 'lodash'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A012 = props => {
  const isNothing = arg => isNil(arg) || isEmpty(arg)
  const { iconname, primarytext, secondarytext } = props

  return (
    <Fragment>
      {isNothing(primarytext) ? (
        <ListItem button>
          <Icon iconname={iconname} />
        </ListItem>
      ) : isNil(iconname) ? (
        <ListItem button>
          <ListItemText
            primary={primarytext}
            secondary={secondarytext}
          />
        </ListItem>
      ) : (
        <ListItem button>
          <Icon iconname={iconname} />
          <ListItemText
            primary={primarytext}
            secondary={secondarytext}
          />
        </ListItem>
      )}
    </Fragment>
  )
}

A012.propTypes = createPropTypes(schema)
export default A012
