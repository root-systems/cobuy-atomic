import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

// Import index.js from the same folder
import AddressFormFragment from '.'

// List of stories of use cases for atom
storiesOf('Molecules|M007 - Address Form Fragment', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <AddressFormFragment
      addressField01={{
        value: text('addressField01 address01', 'Level 2, 275 Cuba Street'),
        error: boolean('addressField01 error', false)
      }}
      suburbField={{
        value: text('suburbField suburb', 'Te Aro'),
        error: boolean('suburbField error', false)
      }}
      cityField={{
        value: text('cityField city', 'Wellington'),
        error: boolean('cityField error', false)
      }}
      postCodeField={{
        value: text('postCodeField postcode', '6011'),
        error: boolean('postCodeField error', false)
      }}
      countryField={{
        value: text('countryField postcode', 'New Zealand'),
        error: boolean('countryField error', false)
      }}
    />
  ))
