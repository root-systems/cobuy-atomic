import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { Typography } from '@material-ui/core'

import schema from './schema'

const A006 = props => {
  return (
    <Typography variant={props.variant}>
      {props.title}
    </Typography>
  )
}

A006.propTypes = createPropTypes(schema)

export default A006
