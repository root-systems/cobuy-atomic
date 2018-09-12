import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import Popper from '@material-ui/core/Popper'

import IconButton from '../../atoms/A017-IconButton'

import schema from './schema'
import styles from './styles'

const M008 = props => {
  console.log('PROPS', props)
  return (
    <div>
      <IconButton
        color={props.color}
        disabled={props.disabled}
        handleClick={props.handleClick}
        iconname={props.iconname}
        ariaLabel={props.ariaLabel}
        placement={props.placement}
      />
      <Popper>
        {props.children}
      </Popper>
    </div>
  )
}

M008.propTypes = createPropTypes(schema)

export default withStyles(styles)(M008)
