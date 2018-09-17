import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '../../atoms/A009-AppBar'
import Typography from '../../particles/P002-Typography'
import IconButton from '../../atoms/A003-IconButton'
import PageSettingsMenu from '../M008-PageSettingsMenu'

import schema from './schema'
import styles from './styles'

const M001 = props => {
  const {classes, menuClick, profileClick, pageTitle, settingsItems} = props
  return (
    <AppBar position='fixed'>
      <IconButton
        className={classes.menuButton}
        ariaLabel='menu'
        iconname='menu'
        onClick={menuClick}
      />
      <Typography variant='title' color='inherit' className={classes.title}>
        {pageTitle}
      </Typography>
      <IconButton
        ariaLabel='profile'
        iconname='person'
        onClick={profileClick}
      />
      {settingsItems &&
        <PageSettingsMenu>
          {settingsItems}
        </PageSettingsMenu>
      }
    </AppBar>
  )
}

M001.propTypes = createPropTypes(schema)

export default withStyles(styles)(M001)
