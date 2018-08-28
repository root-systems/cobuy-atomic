import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import {isNil} from 'lodash'

import Avatar from '@material-ui/core/Avatar'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const A014 = props => {
  return (
    <Fragment>
      { isNil(props.iconname) && isNil(props.text) ? (
        <Avatar alt={props.alt} src={props.src} srcSet={props.srcSet} />
      ) : isNil(props.iconname) ? (
        <Avatar>{props.text}</Avatar>
      ) : (
        <Avatar>
          <Icon iconname='person' />
        </Avatar>
      )}
    </Fragment>
  )
}

A014.propTypes = createPropTypes(schema)

export default A014
