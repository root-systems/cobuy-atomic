import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './a001'

storiesOf('example/atoms/Button', module)
  .add('plain', () => (
    <Button title={'Search'} />
  ))
