import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { muiThemeProvider } from '../../../utility'

import Button from '.'

storiesOf('Atoms|A001', module)
  .addDecorator(muiThemeProvider)
  .add('Default', () => (
    <Button title={'default button'} buttonColor = {'default'} />
  ))
  .add('Primary', () => (
    <Button title={'primary button'} buttonColor = {'primary'} />
  ))
  .add('Secondary', () => (
    <Button title={'secondary button'} buttonColor ={'secondary'} />
  ))