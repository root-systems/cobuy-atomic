import React from 'react'
import { Formik } from 'formik'
import createPropTypes from 'json-schema-prop-types'

import EditPasswordFragment from '../../molecules/M010-EditPasswordFormFragment'
import PasswordField from '../../atoms/A012-PasswordField'

import schema from './schema'

const O005 = props => {
  const {initialValues} = props
  return (
    <Formik
      initialValues={initialValues}
      validate={EditPasswordFragment.validation}
    >
      <EditPasswordFragment />
      <PasswordField
        id='currentPassword'
        name='currentPassword'
        label='Enter Password'
        currentPasswordLength={10}
      />
    </Formik>
  )
}

O005.propTypes = createPropTypes(schema)

export default O005
