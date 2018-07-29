import React from 'react'

import Button from '../../atoms/button'
import Label from '../../atoms/label'
import Input from '../../atoms/input'

const search = (props) => {
  const { label, title } = props

  return (
    <div>
      <Label label={label} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Input />
        <Button title={title} />
      </div>
    </div>
  )
}

export default search
