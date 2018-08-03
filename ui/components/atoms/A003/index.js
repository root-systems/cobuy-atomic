import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Icon from '@material-ui/core/Icon'
import SvgIcon from '@material-ui/core/SvgIcon'

import svgAdd from '../../../assets/icons/baseline-accessibility-24px.svg'

import schema from './schema'

const uiMode = 'svg'

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

// Takes an SVG React Element and returns its child Elements (Paths)
const renderSvgPaths = (iconname) => {
  if (svgMap[iconname] === undefined) { 
    console.error('iconname not found in the key of svgMap') 
    return null
  }
  const svgELement = svgMap[iconname]()
  return React.Children.map(svgELement.props.children, (childElement) => {
    return childElement
  })
}

const A003 = props => {
  switch (uiMode) {
    case 'wired':
      return (
        <Icon color={props.variant}>
          {materialMap[props.iconname]}
        </Icon>
      )

    case 'svg':
      return (
        <SvgIcon {...props}>
          {renderSvgPaths(props.iconname)}
        </SvgIcon>

      )

    default:
      return (
        <Icon color={props.palette}>
          {materialMap[props.iconname]}
        </Icon>
      )
  }
}

A003.propTypes = createPropTypes(schema)

export default A003
