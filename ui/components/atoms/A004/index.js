import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { AppBar, Toolbar, Typography  } from '@material-ui/core'

import schema from './schema'

const A004 = props => {
  return (
    <AppBar position={props.position} color='primary' position='static'>
      <Toolbar>
      <Typography variant="title" color="inherit">
            {/* Groups Domain */}
            {props.children}
          </Typography>
      </Toolbar>
    </AppBar>
  )
}

A004.propTypes = createPropTypes(schema)

export default A004