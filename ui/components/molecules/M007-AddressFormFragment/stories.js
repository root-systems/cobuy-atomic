import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

// Import index.js from the same folder
import AddressFormFragment from '.'

// List of stories of use cases for atom
storiesOf('Molecules|M007 - Address Form Fragment', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <AddressFormFragment
      addressNameField={{
        value: text('addressNameField addressname', 'c/o Enspiral Dev Academy')
      }}
      addressLineOneField={{
        value: text('addressLineOneField address01', 'Level 2, 275 Cuba Street')
      }}
      addressLineTwoField={{
        value: text('addressLineTwoField address02', ' ')
      }}
      suburbField={{
        value: text('suburbField suburb', 'Te Aro')
      }}
      cityField={{
        value: text('cityField city', 'Wellington')
      }}
      postCodeField={{
        value: text('postCodeField postcode', '6011')
      }}
      countryField={{
        value: text('countryField postcode', 'New Zealand')
      }}
    />
  ))
