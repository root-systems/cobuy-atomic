import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import Icon from '../../particles/P001-Icon'

import schema from './schema'
import styles from './styles'

const A015 = props => {
  const {color, iconname, classes} = props
  return (
    <Fragment>
      <Button
        variant='fab'
        disabled
        color={color}
      >
        <Icon iconname={iconname} />
      </Button>
      <CircularProgress
        size={68}
        className={classes.circularProgress} />
    </Fragment>
  )
}

A015.propTypes = createPropTypes(schema)

export default withStyles(styles)(A015)
