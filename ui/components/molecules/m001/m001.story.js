import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { muiThemeProvider } from '../../../utility'

import Nav from '.'

storiesOf('Molecules|M001', module)
  .addDecorator(muiThemeProvider)
  .add('Default', () => (
    <Nav title={`'First item'`} />
  ))