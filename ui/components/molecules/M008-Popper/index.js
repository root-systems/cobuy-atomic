import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles, Paper } from '@material-ui/core'

import Popper from '@material-ui/core/Popper'

import schema from './schema'
import styles from './styles'

const M008 = props => {
  return (
    <div>
      <Popper
        open
        placement='bottom'
      >
        <Paper className={props.classes.paper} elevation={1}>
          {props.children}
        </Paper>
      </Popper>
    </div>
  )
}

M008.propTypes = createPropTypes(schema)

export default withStyles(styles)(M008)
