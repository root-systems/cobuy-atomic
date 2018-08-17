import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'
import 'wired-elements'

import schema from './schema'
import styles from './styles'

const select = props => {
  return props.disabled ? (
    <wired-icon-button disabled>favorite</wired-icon-button>
  ) : (
    <wired-icon-button class={props.classes.red + ' ' + props.classes.big}>
      favorite
    </wired-icon-button>
  )
}

select.propTypes = createPropTypes(schema)

export default withStyles(styles)(select)
