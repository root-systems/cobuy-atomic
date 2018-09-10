import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Drawer, IconButton, Slide } from '@material-ui/core'
import Icon from '../../particles/P001-Icon'

import schema from './schema'
import styles from './styles'

const A021 = props => {
  const {classes, handleDrawerClose, open, children} = props
  return (
    <Slide direction='left' in={open} mountOnEnter unmountOnExit>
      <Drawer
        variant='permanent'
        anchor='right'
        classes={{
          paper: classes.drawerPaper
        }}
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <Icon iconname='chevron_left' />
          </IconButton>
        </div>
        {children}
      </Drawer>
    </Slide>
  )
}

A021.propTypes = createPropTypes(schema)

export default withStyles(styles, { withTheme: true })(A021)
