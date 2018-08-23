import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Checkbox from '@material-ui/core/Checkbox'

import schema from './schema'

const A011 = props => {
  return (
    <Checkbox
      color={props.color}
      checked={props.checked}
      disabled={props.disabled}
      disableRipple={props.disableRipple}
      value={props.value}
      indeterminate={props.indeterminate}
    />
  )
}

A011.propTypes = createPropTypes(schema)

export default A011
