import React from 'react'
import { storiesOf } from '@storybook/react'

import Links from '.'

storiesOf('@example|molecules/links', module).add('plain', () => (
  <Links
    links={[
      { name: 'Home' },
      { name: 'About' },
      { name: 'Blog' },
      { name: 'Contact' }
    ]}
    logo={{ height: 50, width: 100 }}
  />
))
