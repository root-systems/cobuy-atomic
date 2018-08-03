import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'
import { WiredCheckBox } from 'react-wired'

import schema from './schema'
import styles from './styles'

const checkbox = (props) => {
  return(
    <WiredCheckBox text={props.text} disabled={props.disabled} checked={props.checked} onClick={props.onClick} />
  )
}

checkbox.propTypes = createPropTypes(schema)

export default withStyles(styles)(checkbox)
