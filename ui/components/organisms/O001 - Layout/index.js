import React, {Fragment} from 'react'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Appbar from '../../molecules/M001-AppBar'
import ResponsiveDrawer from '../../molecules/M003-ResponsiveDrawer'

const O001 = props => {
  return (
    <Fragment>
      <Appbar
        pageTitle='Cobuy'
      />
      <ResponsiveDrawer />
    </Fragment>
  )
}

O001.propTypes = createPropTypes(schema)

export default O001
