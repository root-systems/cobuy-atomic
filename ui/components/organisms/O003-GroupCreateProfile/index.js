import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { Formik } from 'formik'
import { string, object } from 'yup'
import { isNil } from 'lodash'

import { Grid, Paper, withStyles } from '@material-ui/core/'

import ProfileFormFragment from '../../molecules/M002-ProfleFormFragment'

import Button from '../../atoms/A001-Button'
import Typography from '../../particles/P002-Typography'

import schema from './schema'
import styles from './styles'

const loadValues = (props) => ({
  avatarAlt: isNil(props.avatarAlt) ? '' : props.avatarAlt,
  avatarSrc: isNil(props.avatarSrc) ? '' : props.avatarSrc,
  nameField: isNil(props.name) ? '' : props.name,
  descriptionField: isNil(props.description) ? '' : props.description,
  websiteField: isNil(props.website) ? '' : props.website,
  emailField: isNil(props.email) ? '' : props.email
})

const validateSchema = () => object().shape({
  name: string().required(),
  email: string().email(),
  website: string().url()
})

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    window.alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

const O003 = props => {
  const { classes, handleCancel } = props
  return (
    <Formik
      initialValues={loadValues(props)}
      validationSchema={validateSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
        /* Todo: pass isSubmitting to Save/Send button */
      }) => (
        <Paper className={classes.paper} elevation={1}>
          <Typography variant='headline' align='center'>
            Create a group
          </Typography>

          <ProfileFormFragment
            onChange={handleChange}
            avatar={{ alt: values.avatarAlt, src: values.avatarSrc }}
            nameField={{
              value: values.nameField,
              error: errors.nameField
            }}
            descriptionField={{ value: values.descriptionField }}
            websiteField={{
              value: values.websiteField,
              error: errors.websiteField
            }}
            emailField={{
              value: values.emailField,
              error: errors.emailField
            }}
          />
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <Button onClick={handleCancel} color='secondary' text='Cancel' />
              <Button onClick={handleSubmit} variant='contained' color='primary' text='Save' />
            </Grid>
          </Grid>
        </Paper>
      )}
    </Formik>
  )
}

O003.propTypes = createPropTypes(schema)

export default withStyles(styles)(O003)
