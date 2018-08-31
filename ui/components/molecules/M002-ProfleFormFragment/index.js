import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Grid } from '@material-ui/core/'

import TextLabel from '../../atoms/A010-InputWithLabel'
import Avatar from '../../atoms/A014-Avatar'

import schema from './schema'

const M002 = props => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        {/* TODO: onclick(Avatar) open upload modal when avatar clicked */}
        <Avatar
          alt={props.avatar.alt}
          src={props.avatar.src}
          iconname='flower'
        />
      </Grid>
      <Grid item xs={12}>
        <TextLabel
          id='name'
          name='name'
          label='Name'
          value={props.nameField.value}
          placeholder='Daniel Lewis'
          type='text'
          required
          error={props.nameField.error}
        />
      </Grid>
      <Grid item xs={12}>
        {/* TODO: make multiline textfield with label and update this to it */}
        <TextLabel
          id='description'
          name='description'
          label='Description'
          value={props.descriptionField.value}
          placeholder='There once was a little group that wished to buy together...'
          type='text'
        />
      </Grid>
      <Grid item xs={12}>
        <TextLabel
          id='website'
          name='website'
          label='Website address'
          value={props.websiteField.value}
          placeholder='www.cobuy.nz'
          type='url'
          error={props.websiteField.error}
        />
      </Grid>
      <Grid item xs={12}>
        <TextLabel
          id='email'
          name='email'
          label='Email address'
          value={props.emailField.value}
          placeholder='support@cobuy.nz'
          type='email'
          error={props.emailField.error}
        />
      </Grid>
    </Grid>
  )
}

M002.propTypes = createPropTypes(schema)

export default M002
