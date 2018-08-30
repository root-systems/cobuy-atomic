import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Drawer } from '@material-ui/core'

import schema from './schema'
import styles from './styles'

const A015 = props => {
  const {variant, theme, handleDrawerToggle, open} = this.props
  return (
    <Drawer
      variant={variant}
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
    >
      {props.children}
    </Drawer>
  )
}

A015.propTypes = createPropTypes(schema)

export default withStyles(styles, { withTheme: true })(A015)
