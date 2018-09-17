import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Field } from 'formik'
import { Checkbox } from 'formik-material-ui'

import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A111 = props => {
  return (
    <Field
      component={Checkbox}
      icon={(<Icon iconname='favorite_border' />)}
      checkedIcon={(<Icon iconname='favorite' />)}
      {...props}
    />
  )
}

A111.propTypes = createPropTypes(schema)

export default A111
