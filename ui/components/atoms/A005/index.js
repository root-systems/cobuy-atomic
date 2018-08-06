import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { Typography } from '@material-ui/core'

import schema from './schema'

const A005 = props => {
  return (
    <Typography variant="title" align={props.alignment} color={props.color}>
      {props.title}
    </Typography>
  )
}

A005.propTypes = createPropTypes(schema)

export default A005
