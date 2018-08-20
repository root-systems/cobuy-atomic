import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Tabs from '.'
import Tab from '../A006-Tab'

// List of stories of use cases for atom
storiesOf('Atoms|A007 - Tabs', module)
  .add('Three Tabs', () => (
    <Tabs value={1}>
      <Tab iconname={'group'} />
      <Tab iconname={'add'} />
      <Tab iconname={'shopping_basket'} />
    </Tabs>
  ))
  .add('Centered', () => (
    <Tabs centered value={2}>
      <Tab iconname={'group'} />
      <Tab iconname={'add'} />
      <Tab iconname={'shopping_basket'} />
    </Tabs>
  ))
  .add('Change colors', () => (
    <Tabs indicatorColor='primary' textColor='secondary' value={0}>
      <Tab iconname={'group'} />
      <Tab iconname={'shopping_basket'} />
    </Tabs>
  ))
  .add('Full Width', () => (
    <Tabs value={3}>
      <Tab iconname={'group'} />
      <Tab iconname={'add'} />
      <Tab iconname={'settings'} />
      <Tab iconname={'person'} />
    </Tabs>
  ))
