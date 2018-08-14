import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { Typography } from '@material-ui/core'

import schema from './schema'

const P002 = props => {
  return (
    <Typography variant={props.variant}>
      {props.title}
    </Typography>
  )
}

P002.propTypes = createPropTypes(schema)

export default P002
