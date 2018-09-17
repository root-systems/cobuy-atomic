import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import schema from './schema'

const A101 = props => {
  const { readOnly, ...other } = props

  return (
    <Field
      component={TextField}
      InputProps={{
        readOnly: readOnly
      }}
      type='text'
      margin='normal'
      {...other}
    />
  )
}

A101.propTypes = createPropTypes(schema)

export default A101
