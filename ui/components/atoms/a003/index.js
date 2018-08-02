import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import Icon from '@material-ui/core/Icon'
import SvgIcon from '@material-ui/core/SvgIcon'

import svgAdd from '../../../assets/icons/baseline-accessibility-24px.svg'

import schema from './schema'

const uiMode = 'default'

const materialMap = {
  add: 'add',
  cancel: 'cancel',
  minus: 'minus',
  hamburger: 'menu',
  gear: 'settings',
  burger: '',
  more: '',
  settings: '',
  basket: '',
  person: '',
  group: ''
}

const svgMap = {
  add: svgAdd
}

const A003 = props => {
  switch (uiMode) {
    case 'wired':
      return (
        <Icon color={props.variant}>
          {materialMap[props.iconName]}
        </Icon>
      )

    case 'svg':
      return (
        <SvgIcon {...props}>
          <path d={`${svgMap[props.iconName]}`} />
        </SvgIcon>
      )

    default:
      return (
        <Icon color={props.palette}>
          {materialMap[props.iconName]}
        </Icon>
      )
  }
}

A003.propTypes = createPropTypes(schema)

export default A003
