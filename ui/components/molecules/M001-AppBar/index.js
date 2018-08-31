import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '../../atoms/A004-AppBar'
import Typography from '../../particles/P002-Typography'
import IconButton from '../../atoms/A017-IconButton'

import schema from './schema'
import styles from './styles'

const M001 = props => {
  return (
    <AppBar position='fixed'>
      <IconButton
        class={props.classes.menuButton}
        ariaLabel='Menu'
        iconname='menu'
        handleClick={props.menuClick}
      />
      <Typography variant='title' color='inherit' class={props.classes.flex}>
        {props.pageTitle}
      </Typography>
      <IconButton
        ariaLabel='Profile'
        iconname='person'
        handleClick={props.profileClick}
      />
    </AppBar>
  )
}

M001.propTypes = createPropTypes(schema)

export default withStyles(styles)(M001)
