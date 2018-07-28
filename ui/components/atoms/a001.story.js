import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { muiThemeProvider } from '../../utility'

import Button from './a001'

storiesOf('Atoms|a001', module)
  .addDecorator(muiThemeProvider)
  .add('Default', () => (
    <Button title={'default button'} variant = {'contained'} buttonColor = {'default'} />
  ))
  .add('Primary', () => (
    <Button title={'primary button'} variant = {'contained'} buttonColor = {'primary'} />
  ))
  .add('Secondary', () => (
    <Button title={'seconday button'} variant = {'contained'} buttonColor ={'secondary'} />
  ))