import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { AppBar, Toolbar } from '@material-ui/core'

import schema from './schema'

const A004 = props => {
  return (
    <AppBar position={props.position} color='default'>
      <Toolbar>
        {props.children}
      </Toolbar>
    </AppBar>
  )
}

//A004.propTypes = createPropTypes(schema)

export default A004
