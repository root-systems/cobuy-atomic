import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import {isNil, isEmpty} from 'lodash'

import Avatar from '@material-ui/core/Avatar'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const isNothing = (arg) => isNil(arg) || isEmpty(arg)

const A018 = props => {
  return (
    <Fragment>
      { isNothing(props.src) && isNil(props.text) ? (
        <Avatar>
          <Icon iconname={props.iconname} />
        </Avatar>
      ) : isNil(props.src) ? (
        <Avatar>{props.text}</Avatar>
      ) : (
        <Avatar alt={props.alt} src={props.src} srcSet={props.srcSet} />
      )}
    </Fragment>
  )
}

A018.propTypes = createPropTypes(schema)

export default A018
