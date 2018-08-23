import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Checkbox from '@material-ui/core/Checkbox'

import schema from './schema'

const A011 = props => {
  return (
    <Checkbox
      id={props.id}
      color={props.color}
      checked={props.checked}
      disabled={props.disabled}
      indeterminate={props.indeterminate}
    />
  )
}

A011.propTypes = createPropTypes(schema)

export default A011
