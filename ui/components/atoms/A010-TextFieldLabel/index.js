import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import schema from './schema'

const A010 = props => {
  const { readOnly } = props

  return (
    <Field
      component={TextField}
      type='text'
      InputProps={{
        readOnly: readOnly
      }}
      {...props}
    />
  )
}

A010.propTypes = createPropTypes(schema)

export default A010
