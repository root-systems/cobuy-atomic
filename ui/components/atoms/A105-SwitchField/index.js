import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { FormControlLabel } from '@material-ui/core'
import { Field } from 'formik'
import { Switch } from 'formik-material-ui'

import schema from './schema'

const A105 = props => {
  const { label, labelPlacement, ...other } = props

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement || 'start'}
      control={<Field component={Switch} {...other} />}
    />
  )
}

A105.propTypes = createPropTypes(schema)

export default A105
