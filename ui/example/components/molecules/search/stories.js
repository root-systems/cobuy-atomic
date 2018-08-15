import React from 'react'
import { storiesOf } from '@storybook/react'

import Search from '.'

storiesOf('@example|molecules/search', module).add('plain', () => (
  <Search label={'Search the site'} title={'Search'} />
))
