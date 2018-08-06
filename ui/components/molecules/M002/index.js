import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Icon from '../../atoms/A003'

const styles = {}

const M002 = props => {
  return (
    <div>
      <Icon iconname='question'/>
      <Icon iconname='gear'/>
    </div>
  )
}

M002.propTypes = createPropTypes(schema)

export default withStyles(styles)(M002)
