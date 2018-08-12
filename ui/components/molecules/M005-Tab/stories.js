import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import { Tab, Paper } from '@material-ui/core'

// Import from Atoms
import TabIcon from '../../atoms/A003-Icons'

// List of stories of use cases for atom
storiesOf('Molecules|M005 - Tab', module)
  .add('Tab studies - icon and label', () => (
    <div>
      <Paper style={{ width: 480 }}>
        <Tab icon={<TabIcon iconname='group'/>} label='Group' />
        <Tab icon={<TabIcon iconname='person'/>} label='Members' />
        <Tab icon={<TabIcon iconname='shopping_basket'/>} label='Basket' />
      </Paper>
    </div>
  ))
  storiesOf('Molecules|M005 - Tab', module)
  .add('Tab studies - label only', () => (
    <div>
      <Paper style={{ width: 480 }}>
        <Tab label='Group' />
        <Tab label='Members' />
        <Tab label='Basket' />
      </Paper>
    </div>
  ))
  storiesOf('Molecules|M005 - Tab', module)
  .add('Tab studies - icon only', () => (
    <div>
      <Paper style={{ width: 480 }}>
        <Tab icon={<TabIcon iconname='group'/>} />
        <Tab icon={<TabIcon iconname='person'/>} />
        <Tab icon={<TabIcon iconname='shopping_basket'/>} />
      </Paper>
    </div>
  ))