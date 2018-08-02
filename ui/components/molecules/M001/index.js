import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Icon from '../../atoms/A003'

const styles = {}

const M001 = props => {
  return (
    <Icon iconName='hamburger' />
  )
}

M001.propTypes = createPropTypes(schema)

export default withStyles(styles)(M001)
