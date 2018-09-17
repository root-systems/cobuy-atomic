import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { AppBar, Toolbar } from '@material-ui/core'

import schema from './schema'

const A009 = props => {
  return (
    <AppBar color='primary' position={props.position}>
      <Toolbar variant='regular'>{props.children}</Toolbar>
    </AppBar>
  )
}

A009.propTypes = createPropTypes(schema)

export default A009
