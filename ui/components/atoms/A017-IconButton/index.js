import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import IconButton from '@material-ui/core/IconButton'

import Icon from '../../particles/P001-Icon'
import schema from './schema'

const A017 = props => {
  return (
    <IconButton
      className={props.class}
      color={props.color}
      disabled={props.disabled}
      onClick={props.handleClick}
      aria-label={props.ariaLabel}
    >
      <Icon iconname={props.iconname} />
    </IconButton>
  )
}

A017.propTypes = createPropTypes(schema)

export default A017
