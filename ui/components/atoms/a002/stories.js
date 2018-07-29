import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '.'

storiesOf('Atoms|A002', module)
  .add('Default', () => (
    <Button title={'default button'} color = {'default'} />
  ))
  .add('Primary', () => (
    <Button title={'primary button'} color = {'primary'} />
  ))
  .add('Secondary', () => (
    <Button title={'secondary button'} color ={'secondary'} />
  ))