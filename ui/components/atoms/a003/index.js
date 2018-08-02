import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import Icon from '@material-ui/core/Icon'
import SvgIcon from '@material-ui/core/SvgIcon'

import schema from './schema'

const uiMode = 'default'

const materialMap = {
  add: 'add',
  cancel: 'cancel',
  minus: 'minus',
  delete: '',
  question: '',
  burger: '',
  more: '',
  settings: '',
  basket: '',
  person: '',
  group: ''
}

const svgMap = {
  add: '../../../assets/icons/baseline-accessibility-24px.svg'
}

const A003 = props => {
  switch (uiMode) {
    case 'wired':
      return (
        <Icon color={props.variant} style={{ fontSize: props.size }}>
          {materialMap[props.iconName]}
        </Icon>
      )

    case 'svg':
      return (
        <SvgIcon {...props}>
          <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
        </SvgIcon>
      )

    default:
      return (
        <Icon color={props.variant} style={{ fontSize: props.size }}>
          {materialMap[props.iconName]}
        </Icon>
      )
  }
}

A003.propTypes = createPropTypes(schema)

export default A003
