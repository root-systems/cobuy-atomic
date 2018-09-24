import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { isNil, isEmpty } from 'lodash'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A012v2 = props => {
  const isNothing = arg => isNil(arg) || isEmpty(arg)
  const { iconname, primarytext, secondarytext } = props

  return (
    // <ListItem button>
    //   {iconname && <Icon iconname={iconname} />}
    //   <ListItemText primary={primarytext} secondary={secondarytext} />
    // </ListItem>

    <Fragment>
      {isNothing(primarytext && secondarytext) ? (
        <ListItem button>
          <Icon iconname={iconname} />
        </ListItem>
      ) : (
        <ListItem button>
          <Icon iconname={iconname} />
          <ListItemText primary={primarytext} secondary={secondarytext} />
        </ListItem>
      )}
    </Fragment>

  )
}

A012v2.propTypes = createPropTypes(schema)
export default A012v2
