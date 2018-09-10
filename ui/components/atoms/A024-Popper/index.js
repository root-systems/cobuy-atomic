import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import {Popper, Paper} from '@material-ui/core'

import Typography from '../../particles/P002-Typography'
import IconButton from '../../atoms/A017-IconButton'

import schema from './schema'
import styles from './styles'

const A024 = props => {
  return (
    <div>
      <IconButton
        ariaLabel={props.ariaLabel}
        iconname={props.iconname}
        handleClick={props.moreMenuClick}
        color={props.color}
      />
      <Popper open >
        <Paper>
          <Typography>The content of the Popper.</Typography>
        </Paper>
      </Popper>
    </div>
  )
}

A024.propTypes = createPropTypes(schema)

export default withStyles(styles)(A024)
