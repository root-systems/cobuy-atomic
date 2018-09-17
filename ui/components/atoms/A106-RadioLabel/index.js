import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'

import schema from './schema'

const A026 = props => {
  return (
    <FormControlLabel
      label={props.label}
      labelPlacement={props.labelPlacement}
      control={
        <Radio
          id={props.id}
          color={props.color}
          checked={props.checked}
          disabled={props.disabled}
          aria-label={props.ariaLabel}
          value={props.value}
        />
      }
    />
  )
}

A026.propTypes = createPropTypes(schema)

export default A026
