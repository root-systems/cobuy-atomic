import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'
import "wired-elements"

import schema from './schema'
import styles from './styles'

const card = (props) => {
  return(
    // Note: as wired-card is a web-component it uses class not className
    <wired-card class={props.classes.container} elevation={props.elevation} >{props.element}</wired-card>
  )
}

card.propTypes = createPropTypes(schema)

export default withStyles(styles)(card)
