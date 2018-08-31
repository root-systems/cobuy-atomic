import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import schema from './schema'

const A014 = props => {
  return (
    <FormControlLabel
      label={props.label}
      labelPlacement={props.labelPlacement}
      control={
        <Checkbox
          id={props.id}
          color={props.color}
          checked={props.checked}
          disabled={props.disabled}
          indeterminate={props.indeterminate}
          value={props.value}
          aria-label={props.ariaLabel}
        />
      }
    />
  )
}

A014.propTypes = createPropTypes(schema)

export default A014
