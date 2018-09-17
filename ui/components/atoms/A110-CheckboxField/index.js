import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { FormControlLabel } from '@material-ui/core'
import { Field } from 'formik'
import { Checkbox } from 'formik-material-ui'

import schema from './schema'

const A110 = props => {
  const {
    label,
    labelPlacement,
    ...other
  } = props

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement || 'start'}
      control={
        <Field
          component={Checkbox}
          {...other}
        />
      }
    />
  )
}

A110.propTypes = createPropTypes(schema)

export default A110
