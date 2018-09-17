import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { Popper, withStyles, Paper } from '@material-ui/core'

import IconButton from '../../atoms/A017-IconButton'

import schema from './schema'
import styles from './styles'

const M008 = props => {
  const {
    ariaLabel,
    iconname,
    open,
    children
  } = props

  return (
    <Fragment>
      <IconButton
        ariaLabel={ariaLabel}
        iconname={iconname}
      />
      <Popper
        open={open}
        placement='right-end'
      >
        <Paper className={props.classes.paper} elevation={1}>
          {children}
        </Paper>
      </Popper>
    </Fragment>
  )
}

M008.propTypes = createPropTypes(schema)

export default withStyles(styles)(M008)
