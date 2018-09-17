import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Hidden } from '@material-ui/core'

import MobileDrawer from '../../atoms/A019-MobileDrawer'
import DesktopDrawer from '../../atoms/A020-DesktopDrawer'

import schema from './schema'
import styles from './styles'

const M003 = props => {
  const { open, handleDrawerToggle, children } = props
  return (
    <Fragment>
      <Hidden mdUp>
        <MobileDrawer open={open} onClose={handleDrawerToggle}>
          {children}
        </MobileDrawer>
      </Hidden>
      {/* TODO Change to Hidden implementation='css' if server side rendering */}
      <Hidden smDown>
        <DesktopDrawer>{children}</DesktopDrawer>
      </Hidden>
    </Fragment>
  )
}

M003.propTypes = createPropTypes(schema)

export default withStyles(styles)(M003)
