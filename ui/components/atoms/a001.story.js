import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { muiThemeProvider } from '../../utility'

import Button from './a001'

storiesOf('Atoms|a001', module)
  .addDecorator(muiThemeProvider)
  .add('Primary', () => (
    <Button title={'Search'} />
  ))
  .add('Secondary', () => (
    <Button title={'Click Me!'} />
  ))