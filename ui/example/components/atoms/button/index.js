import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'
import styles from './styles'

const button = (props) => {
  return (
    <button>{props.title}</button>
  )
}

button.propTypes = createPropTypes(schema)

export default withStyles(styles)(button)
