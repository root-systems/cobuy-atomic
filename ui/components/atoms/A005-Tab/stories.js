import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import { Tab } from '@material-ui/core'

// Import from Atoms
import TabIcon from '../A003-Icon'

// List of stories of use cases for atom
storiesOf('Atoms|A005 - Tab', module)
  .add('Tab studies - icon and label', () => (
    <div>
      <Tab icon={<TabIcon iconname='group'/>} label='Group' />
      <Tab icon={<TabIcon iconname='person'/>} label='Members' />
      <Tab icon={<TabIcon iconname='shopping_basket'/>} label='Basket' />
    </div>
  ))
  storiesOf('Atoms|A005 - Tab', module)
  .add('Tab studies - label only', () => (
    <div>
      <Tab label='Group' />
      <Tab label='Members' />
      <Tab label='Basket' />
    </div>
  ))
  storiesOf('Atoms|A005 - Tab', module)
  .add('Tab studies - icon only', () => (
    <div>
      <Tab icon={<TabIcon iconname='group'/>} />
      <Tab icon={<TabIcon iconname='person'/>} />
      <Tab icon={<TabIcon iconname='shopping_basket'/>} />
    </div>
  ))