import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core/'

import ProfileFormFragment from '../../molecules/M002-ProfleFormFragment'

import Button from '../../atoms/A001-Button'
import Typography from '../../particles/P002-Typography'

import schema from './schema'
import styles from './styles'

const O003 = props => {
  return (
    <Paper className={props.classes.paper} elevation={1}>
      <Typography variant='headline' align='center'>
        Create a group
      </Typography>

      <ProfileFormFragment
        avatar={{ alt: props.avatar.alt, src: props.avatar.src }}
        nameField={{
          value: props.nameField.value,
          error: props.nameField.error
        }}
        descriptionField={{ value: props.descriptionField.value }}
        websiteField={{
          value: props.websiteField.value,
          error: props.websiteField.error
        }}
        emailField={{
          value: props.emailField.value,
          error: props.emailField.error
        }}
      />
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Button variant='default' color='secondary' text='Cancel' />
          <Button variant='contained' color='primary' text='Save' />
        </Grid>
      </Grid>
    </Paper>
  )
}

O003.propTypes = createPropTypes(schema)

export default withStyles(styles)(O003)
