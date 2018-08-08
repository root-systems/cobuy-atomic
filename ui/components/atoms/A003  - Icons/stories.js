import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '.'
import notes from './readme.md'

storiesOf('Atoms|A003 - Icons', module)
  .addDecorator(withNotes)
  .add(
    'Header back icon',
    () => <Icon palette={'primary'} iconname={'hamburger'} />,
  {
    notes: { markdown: notes }
  }
  )
  .add(
    'Header settings icon',() => <Icon palette={'primary'} iconname={'gear'} />,
  {
    notes: { markdown: notes }
  }
  )
// .add(
//   'header cancel icon',
//   () => (
//     <Icon color='primary' style={{ fontSize: 24 }}>
//       cancel
//     </Icon>
//   ),
// {
//   notes: { markdown: notes }
// }
// )
// .add(
//   'header more vertical icon',
//   () => (
//     <Icon color='primary' style={{ fontSize: 24 }}>
//       more_vert
//     </Icon>
//   ),
// {
//   notes: { markdown: notes }
// }
// )
// .add(
//   'header more horizontal icon',
//   () => (
//     <Icon color='primary' style={{ fontSize: 24 }}>
//       more_horizontal
//     </Icon>
//   ),
// {
//   notes: { markdown: notes }
// }
// )
// .add(
//   'tab group list icon',
//   () => (
//     <Icon color='primary' style={{ fontSize: 24 }}>
//       group
//     </Icon>
//   ),
// {
//   notes: { markdown: notes }
// }
// )
// .add(
//   'tab basket icon',
//   () => (
//     <Icon color='primary' style={{ fontSize: 24 }}>
//       shopping_basket
//     </Icon>
//   ),
// {
//   notes: { markdown: notes }
// }
// )
// .add(
//   'tab member list icon',
//   () => (
//     <Icon color='primary' style={{ fontSize: 24 }}>
//       supervised_user_circle
//     </Icon>
//   ),
// {
//   notes: { markdown: notes }
// }
// )
