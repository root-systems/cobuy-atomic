import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '.'
import notes from './readme.md'

storiesOf('Particles|P001 - Icon', module)
  .addDecorator(withNotes)
  .add('Menu icon', () =>
    <Icon
      palette={'primary'}
      iconname={'menu'}
    />,
  { notes: { markdown: notes }
  })
  .add('Cancel icon', () =>
    <Icon
      palette={'primary'}
      iconname={'cancel'}
    />,
  { notes: { markdown: notes }
  })
  .add('Settings icon', () =>
    <Icon
      palette={'primary'}
      iconname={'settings'}
    />,
  { notes: { markdown: notes }
  })
  .add('Group icon', () =>
    <Icon
      palette={'primary'}
      iconname={'group'}
    />,
  { notes: { markdown: notes }
  })
  .add('Basket icon', () =>
    <Icon
      palette={'primary'}
      iconname={'shopping_basket'}
    />,
  { notes: { markdown: notes }
  })
  .add('Member icon', () =>
    <Icon
      palette={'primary'}
      iconname={'person'}
    />,
  { notes: { markdown: notes }
  })
  .add('Filter_vintage icon', () =>
    <Icon
      palette={'primary'}
      iconname={'filter_vintage'}
    />,
  { notes: { markdown: notes }
  })
  .add('Notifications icon', () =>
    <Icon
      palette={'primary'}
      iconname={'notifications'}
    />,
  { notes: { markdown: notes }
  })
  .add('More horizontal icon', () =>
    <Icon
      palette={'primary'}
      iconname={'more_horiz'}
    />,
  { notes: { markdown: notes }
  })
  .add('Chevron left icon', () =>
    <Icon
      palette={'primary'}
      iconname={'chevron_left'}
    />,
  { notes: { markdown: notes }
  })
  .add('Chevron right icon', () =>
    <Icon
      palette={'primary'}
      iconname={'chevron_right'}
    />,
  { notes: { markdown: notes }
  })
