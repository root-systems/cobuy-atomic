import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Grid } from '@material-ui/core/'

import TextField from '../../atoms/A101-TextField'
import TextAreaField from '../../atoms/A102-TextAreaField'
import Avatar from '../../atoms/A018-Avatar'

import schema from './schema'

const M011 = props => {
  const {
    onChange,
    avatar,
    nameField,
    descriptionField,
    websiteField,
    emailField
  } = props
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        {/* TODO: onclick(Avatar) open upload modal when avatar clicked */}
        <Avatar alt={avatar.alt} src={avatar.src} iconname='flower' />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='name'
          name='name'
          label='Name'
          value={nameField.value}
          placeholder='Daniel Lewis'
          type='text'
          required
          error={nameField.error}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextAreaField
          id='description'
          name='description'
          label='Description'
          value={descriptionField.value}
          placeholder='There once was a little group that wished to buy together...'
          type='text'
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='website'
          name='website'
          label='Website address'
          value={websiteField.value}
          placeholder='www.cobuy.nz'
          type='url'
          error={websiteField.error}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='email'
          name='email'
          label='Email address'
          value={emailField.value}
          placeholder='support@cobuy.nz'
          type='email'
          error={emailField.error}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  )
}

M011.propTypes = createPropTypes(schema)

export default M011
