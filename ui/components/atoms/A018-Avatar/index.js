import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { isNil, isEmpty } from 'lodash'

import Avatar from '@material-ui/core/Avatar'
import Icon from '../../particles/P001-Icon'

import schema from './schema'

const isNothing = arg => isNil(arg) || isEmpty(arg)

const A018 = props => {
  const { src, text, iconname, alt, srcSet } = props
  return (
    <Fragment>
      {isNothing(src) && isNil(text) ? (
        <Avatar>
          <Icon iconname={iconname} />
        </Avatar>
      ) : isNil(src) ? (
        <Avatar>{text}</Avatar>
      ) : (
        <Avatar alt={alt} src={src} srcSet={srcSet} />
      )}
    </Fragment>
  )
}

A018.propTypes = createPropTypes(schema)

export default A018
