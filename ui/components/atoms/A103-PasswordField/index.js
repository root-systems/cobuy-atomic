import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import schema from './schema'

const A103 = props => {
  const { currentPasswordLength, ...other } = props
  return (
    <Field
      component={TextField}
      type='password'
      margin='normal'
      {...other}
    />
  )
}

A103.propTypes = createPropTypes(schema)

export default A103
