import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import List from '.'
import ListItem from '../A012-ListItem'

// List of stories of use cases for atom
storiesOf('Atoms|A010 - List', module)
  .add('Primary text only', () => (
    <List>
      <ListItem primary='Tawa Veggy Buyers' />
      <ListItem primary='North Wellington Resto Group' />
      <ListItem primary='S.I. Salmon Buyers' />
      <ListItem primary='Weekly egg buyers' />
      <ListItem primary='Strawberries LTD' />
    </List>
  ))
  .add('Primary & secondary text', () => (
    <List>
      <ListItem primary='Tawa Veggy Buyers' secondary='Tawa, Wellington' />
      <ListItem
        primary='North Wellington Resto Group'
        secondary='Wairarapa, Wellington & Porirua'
      />
      <ListItem primary='S.I. Salmon Buyers' secondary='South Island, NZ' />
      <ListItem
        primary='Weekly egg buyers'
        secondary='Upper hutt, Wellington'
      />
      <ListItem primary='Strawberries LTD' secondary='Horowhenua, Levin' />
    </List>
  ))
  .add('List, Text with icon', () => (
    <List>
      <ListItem iconname='group' primary='Group' />
      <ListItem iconname='cancel' primary='Cancel' />
      <ListItem iconname='help' primary='Help' />
      <ListItem iconname='settings' primary='Settings' />
      <ListItem iconname='favorite' primary='Favorite' />
    </List>
  ))
  .add('List, Primary & secondary text with icon', () => (
    <List>
      <ListItem iconname='group' primary='Group' secondary='List of groups' />
      <ListItem
        iconname='help'
        primary='Help'
        secondary='Need assistance to this website?'
      />
      <ListItem
        iconname='settings'
        primary='Settings'
        secondary='Configure your website settings'
      />
    </List>
  ))
