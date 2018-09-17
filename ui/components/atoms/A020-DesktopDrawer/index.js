import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Drawer } from '@material-ui/core'

import schema from './schema'
import styles from './styles'

const A020 = props => {
  const { classes, children } = props
  return (
    <Drawer
      variant='permanent'
      anchor='left'
      open
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      {children}
    </Drawer>
  )
}

A020.propTypes = createPropTypes(schema)

export default withStyles(styles, { withTheme: true })(A020)
