import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'
import styles from './styles'

const button = props => {
  return (
    <div style={styles.page}>
      <div style={styles.navWrapper}>{props.nav}</div>
      <div style={styles.mainWrapper}>{props.main}</div>
    </div>
  )
}

button.propTypes = createPropTypes(schema)

export default withStyles(styles)(button)
