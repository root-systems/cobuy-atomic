import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import List from '.'
import Icon from '../../particles/P001-Icon'
import ListItemText from '../A011-ListItemText'
import ListItem from '../A012-ListItem'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - List', module)
  .add('Primary text only', () => (
    <List>
      <ListItem button>
        <ListItemText button primary='Tawa Veggy Buyers' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='North Wellington Resto Group' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='S.I. Salmon Buyers' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='Weekly egg buyers' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='Strawberries LTD' />
      </ListItem>
    </List>
  ))
  .add('Primary & secondary text', () => (
    <List>
      <ListItem button>
        <ListItemText button primary='Tawa Veggy Buyers' secondary='Tawa, Wellington' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='North Wellington Resto Group' secondary='Wairarapa, Wellington & Porirua' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='S.I. Salmon Buyers' secondary='South Island, NZ' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='Weekly egg buyers' secondary='Upper hutt, Wellington' />
      </ListItem>
      <ListItem button>
        <ListItemText button primary='Strawberries LTD' secondary='Horowhenua, Levin' />
      </ListItem>
    </List>
  ))
  .add('List, Text with icon', () => (
    <List>
      <ListItem button>
        <Icon iconname='group' />
        <ListItemText button primary='Group' />
      </ListItem>
      <ListItem button>
        <Icon iconname='cancel' />
        <ListItemText button primary='Cancel' />
      </ListItem>
      <ListItem button>
        <Icon iconname='help' />
        <ListItemText button primary='Help' />
      </ListItem>
      <ListItem button>
        <Icon iconname='settings' />
        <ListItemText button primary='Settings' />
      </ListItem>
      <ListItem button>
        <Icon iconname='favorite' />
        <ListItemText button primary='Favorite' />
      </ListItem>
    </List>
  ))
  .add('List, Primary & secondary text with icon', () => (
    <List>
      <ListItem button>
        <Icon iconname='group' />
        <ListItemText button primary='Group' secondary='List of groups' />
      </ListItem>
      <ListItem button>
        <Icon iconname='cancel' />
        <ListItemText button primary='Cancel' secondary='Cancel transactions' />
      </ListItem>
      <ListItem button>
        <Icon iconname='help' />
        <ListItemText button primary='Help' secondary='Need assistance to this website?' />
      </ListItem>
      <ListItem button>
        <Icon iconname='settings' />
        <ListItemText button primary='Settings' secondary='Configure your website settings' />
      </ListItem>
      <ListItem button>
        <Icon iconname='favorite' />
        <ListItemText button primary='Favorite' secondary='List of favorite group' />
      </ListItem>
    </List>
  ))
