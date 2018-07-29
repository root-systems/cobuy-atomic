import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from '.'

storiesOf('@example|atoms/input', module)
  .add('vanilla', () => (
    <Input type='text'/>
  ))
  .add('password', () => (
    <Input placeholder="Password" type='password'/>
  ))
  .add('disabled', () => (
    <Input placeholder="Disabled" type='text' disabled/>
  ))
  .add('with value', () => (
    <Input value="Daniel Lewis" type='text'/>
  ))
  .add('search', () => (
    <Input placeholder="Search" type='search'/>
  ))
  .add('date', () => (
    <Input type='date'/>
  ))
  .add('month', () => (
    <Input type='month'/>
  ))
