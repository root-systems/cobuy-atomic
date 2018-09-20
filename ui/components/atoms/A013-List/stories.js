import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import List from '.'
import Icon from '../../particles/P001-Icon'
import ListItemText from '../A011-ListItemText'
import ListItem from '../A012-ListItem'

// List of stories of use cases for atom
storiesOf('Atoms|A013 - List', module)
  .add('Primary text only', () => (
    <List>
      <ListItem>
        <ListItemText primary='Tawa Veggy Buyers' />
      </ListItem>
      <ListItem>
        <ListItemText primary='North Wellington Resto Group' />
      </ListItem>
      <ListItem>
        <ListItemText primary='S.I. Salmon Buyers' />
      </ListItem>
      <ListItem>
        <ListItemText primary='Weekly egg buyers' />
      </ListItem>
      <ListItem>
        <ListItemText primary='Strawberries LTD' />
      </ListItem>
    </List>
  ))
  .add('Primary & secondary text', () => (
    <List>
      <ListItem>
        <ListItemText primary='Tawa Veggy Buyers' secondary='Tawa, Wellington' />
      </ListItem>
      <ListItem>
        <ListItemText primary='North Wellington Resto Group' secondary='Wairarapa, Wellington & Porirua' />
      </ListItem>
      <ListItem>
        <ListItemText primary='S.I. Salmon Buyers' secondary='South Island, NZ' />
      </ListItem>
      <ListItem>
        <ListItemText primary='Weekly egg buyers' secondary='Upper hutt, Wellington' />
      </ListItem>
      <ListItem>
        <ListItemText primary='Strawberries LTD' secondary='Horowhenua, Levin' />
      </ListItem>
    </List>
  ))
  .add('List, Text with icon', () => (
    <List>
      <ListItem>
        <Icon iconname='group' />
        <ListItemText primary='Group' />
      </ListItem>
      <ListItem>
        <Icon iconname='cancel' />
        <ListItemText primary='Cancel' />
      </ListItem>
      <ListItem>
        <Icon iconname='help' />
        <ListItemText primary='Help' />
      </ListItem>
      <ListItem>
        <Icon iconname='settings' />
        <ListItemText primary='Settings' />
      </ListItem>
      <ListItem>
        <Icon iconname='favorite' />
        <ListItemText primary='Favorite' />
      </ListItem>
    </List>
  ))
  .add('List, Primary & secondary text with icon', () => (
    <List>
      <ListItem>
        <Icon iconname='group' />
        <ListItemText primary='Group' secondary='List of groups' />
      </ListItem>
      <ListItem>
        <Icon iconname='help' />
        <ListItemText primary='Help' secondary='Need assistance to this website?' />
      </ListItem>
      <ListItem>
        <Icon iconname='settings' />
        <ListItemText primary='Settings' secondary='Configure your website settings' />
      </ListItem>
    </List>
  ))
