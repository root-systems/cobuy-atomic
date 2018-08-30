import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Paper } from '@material-ui/core'

import schema from './schema'

import Appbar from '../../molecules/M001-AppBar'
import ResponsiveDrawer from '../../molecules/M003-ResponsiveDrawer'

const O001 = props => {
  return (
    <Paper>
      <Appbar
        pageTitle='Cobuy'
      />
      <ResponsiveDrawer />
    </Paper>
  )
}

O001.propTypes = createPropTypes(schema)

export default O001
