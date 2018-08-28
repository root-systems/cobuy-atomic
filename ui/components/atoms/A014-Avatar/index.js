import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Avatar from '@material-ui/core/Avatar'

import schema from './schema'

const A014 = props => {
  return (
    <Avatar alt={props.alt} img src={props.src}>
      {props.children}
    </Avatar>
  )
}

A014.propTypes = createPropTypes(schema)

export default A014
