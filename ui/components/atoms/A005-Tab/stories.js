import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Tab from '.'
import Icon from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A005 - Tab', module)
  .add('Groups domain Tab', () => (
      <div>
        <Tab label='group' icon={<Icon iconname='group' />} />
        <Tab label='person' icon={<Icon iconname='person' />} />
        <Tab label='shopping_basket' icon={<Icon iconname='shopping_basket' />} />
      </div>
  ))
