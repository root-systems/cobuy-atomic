import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Icon from '@material-ui/core/Icon'

import schema from './schema'

const a003 = props => {
  return (
    <div>
      <Icon className={props.icon}>add_circle</Icon>
      <Icon className={props.icon} color='primary'>
        add_circle
      </Icon>
      <Icon className={props.icon} color='secondary'>
        add_circle
      </Icon>
      <Icon className={props.icon} color='action'>
        add_circle
      </Icon>
      <Icon className={props.iconHover} color='error' style={{ fontSize: 30 }}>
        add_circle
      </Icon>
      <Icon className={props.icon} color='disabled' style={{ fontSize: 36 }}>
        add_circle
      </Icon>
    </div>
  )
}

a003.propTypes = createPropTypes(schema)

export default a003
