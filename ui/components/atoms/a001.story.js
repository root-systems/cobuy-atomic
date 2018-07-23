import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import Button from './a001'

storiesOf('Atoms|a001', module)
  .add('Primary', () => (
    <Button title={'Search'} />
  ))
  .add('Secondary', () => (
    <Button title={'Click Me!'} />
  ))