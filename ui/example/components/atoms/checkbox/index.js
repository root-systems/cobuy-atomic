import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'
import 'wired-elements'

import schema from './schema'
import styles from './styles'

const checkbox = props => {
  return props.disabled ? (
    <wired-checkbox text={props.text} checked={props.checked} disabled />
  ) : props.checked ? (
    <wired-checkbox
      text={props.text}
      checked={props.checked}
      class={props.classes.done}
    />
  ) : props.error ? (
    <wired-checkbox
      text={props.text}
      checked={props.checked}
      class={props.classes.error}
    />
  ) : (
    <wired-checkbox text={props.text} />
  )
}

checkbox.propTypes = createPropTypes(schema)

export default withStyles(styles)(checkbox)
