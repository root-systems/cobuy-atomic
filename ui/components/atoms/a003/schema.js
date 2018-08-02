export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    palette: {
      type: 'string',
      enum: [
        'primary',
        'seconadry',
        'inherit', // TODO check this
        'error'
      ]
    },
    variant: {
      type: 'string',
      enum: [
        'Filled',
        'Outlined',
        'Rounded',
        'Two Tone',
        'Sharp',
        'Edge-cases'
      ]
    },
    size: {
      type: 'string'
    },
    iconName: {
      type: 'string',
      enum: [
        'add',
        'minus',
        'delete',
        'question',
        'burger',
        'more',
        'settings',
        'basket',
        'person',
        'group'
      ]
    }
  },
  required: ['size', 'iconName']
}

// need to update/fix properties
// - background
// - size
