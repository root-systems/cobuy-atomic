import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Typography from '../../particles/P002-Typography'

import schema from './schema'

const A005 = props => {
  return (
    <Typography variant='title' align='center' color='primary'>
      {props.children}
    </Typography>
  )
}

A005.propTypes = createPropTypes(schema)

export default A005
