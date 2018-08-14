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
  menu: 'menu',
  gear: 'settings',
  question: 'help',
  group: 'group',
  shopping_basket: 'shopping_basket',
  person: 'person'
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

const P001 = props => {
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

P001.propTypes = createPropTypes(schema)

export default P001
