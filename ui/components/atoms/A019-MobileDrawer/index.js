import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Drawer } from '@material-ui/core'

import schema from './schema'
import styles from './styles'

const A019 = props => {
  const { classes, handleDrawerToggle, open, children } = props
  return (
    <Drawer
      variant='temporary'
      anchor='left'
      open={open}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
    >
      {children}
    </Drawer>
  )
}

A019.propTypes = createPropTypes(schema)

export default withStyles(styles, { withTheme: true })(A019)
