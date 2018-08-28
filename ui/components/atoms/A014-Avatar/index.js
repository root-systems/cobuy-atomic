import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'

import Avatar from '@material-ui/core/Avatar'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A014 = props => {
  return (
    <Fragment>
      {props.iconname ? (
        <Avatar>
          <Icon iconname='person' />
        </Avatar>
      ) : props.text ? (
        <Avatar>{props.text}</Avatar>
      ) : (
        <Avatar alt={props.alt} src={props.src} srcSet={props.srcSet} />
      )}
    </Fragment>
  )
}

A014.propTypes = createPropTypes(schema)

export default A014
