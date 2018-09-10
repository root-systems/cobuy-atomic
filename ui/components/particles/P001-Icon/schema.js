export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    palette: {
      type: 'string',
      enum: ['primary', 'seconadry', 'inherit', 'error']
    },
    variant: {
      type: 'string',
      enum: ['Filled', 'Outlined', 'Rounded', 'Two Tone', 'Sharp', 'Edge-cases']
    },
    iconname: {
      type: 'string',
      enum: [
        'add',
        'cancel',
        'minus',
        'delete',
        'help',
        'menu',
        'gear',
        'settings',
        'group',
        'shoppingBasket',
        'person',
        'flower',
        'chevron_right',
        'chevron_left',
        'notifications',
        'more_horiz'
      ]
    }
  },
  required: ['iconname']
}
