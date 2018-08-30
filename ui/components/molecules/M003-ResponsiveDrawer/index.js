import React, {Fragment} from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Hidden } from '@material-ui/core'

import Drawer from '../../atoms/A015-Drawer'

import schema from './schema'
import styles from './styles'

const M003 = props => {
  const {open, handleDrawerToggle} = this.props
  return (
    <Fragment>
      <Hidden mdUp>
        <Drawer
          variant='temporary'
          open={open}
          onClose={handleDrawerToggle}
        />
      </Hidden>
      {/* TODO Change to hidden implementation='css' if server side rendering */}
      <Hidden smDown>
        <Drawer
          variant='permanent'
          open
        />
      </Hidden>
    </Fragment>
  )
}

M003.propTypes = createPropTypes(schema)

export default withStyles(styles)(M003)
