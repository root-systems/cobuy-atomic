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
    iconName: {
      type: 'string',
      enum: [
        'add',
        'cancel',
        'minus',
        'delete',
        'question',
        'hamburger',
        'gear',
        'settings',
        'basket',
        'person',
        'group'
      ]
    }
  },
  required: ['iconName']
}

// need to update/fix properties
// - background
// - size
