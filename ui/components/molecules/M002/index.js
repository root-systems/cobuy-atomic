import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Icon from '../../particles/P001-Icon'

const styles = {}

const M002 = props => {
  return (
    <div>
      <Icon iconname='help' />
      <Icon iconname='settings' />
    </div>
  )
}

M002.propTypes = createPropTypes(schema)

export default withStyles(styles)(M002)
