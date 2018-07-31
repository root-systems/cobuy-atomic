import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Button from '@material-ui/core/Button';

import schema from './schema'

const a002 = (props) => {
  return (<Button variant={'fab'} color={ props.color } aria-label={props.ariaLabel}>{props.icon}</Button>)
}

a002.propTypes = createPropTypes(schema)

export default a002