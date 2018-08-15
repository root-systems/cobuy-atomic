import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import 'wired-elements'

import schema from './schema'

const select = props => {
  const listOptions = props.options.map(item => (
    <wired-item key={item.id} value={item.id} text={item.value} />
  ))
  return props.disabled ? (
    <wired-combo selected={props.selected} disabled />
  ) : (
    <wired-combo selected={props.selected}>{listOptions}</wired-combo>
  )
}

select.propTypes = createPropTypes(schema)

export default select
