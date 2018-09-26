import React, {Fragment} from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import {Button, CircularProgress} from '@material-ui/core'

import Icon from '../../particles/P001-Icon'

import schema from './schema'
import styles from './styles'

const A002 = props => {
  const { color, size, ariaLabel, iconname, submitting, classes, hide } = props
  return (
    <Fragment>
      <Button
        variant='fab'
        color={color}
        size={size}
        aria-label={ariaLabel}
        disabled={submitting}
      >
        <Icon iconname={iconname} />
      </Button>
      {submitting ? (
        <CircularProgress
          size={68}
          className={classes.circularProgress}
        />
      ) : (hide)}
    </Fragment>
  )
}

A002.propTypes = createPropTypes(schema)

export default withStyles(styles)(A002)
