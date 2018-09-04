export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    align: {
      type: 'string',
      enum: ['inherit', 'left', 'center', 'right', 'justify']
    },
    color: {
      type: 'string',
      enum: [
        'default',
        'error',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary'
      ]
    },
    gutterBottom: {
      type: 'boolean'
    },
    noWrap: {
      type: 'boolean'
    },
    paragraph: {
      type: 'boolean'
    },
    variant: {
      type: 'string',
      enum: [
        'display4',
        'display3',
        'display2',
        'display1',
        'headline',
        'title',
        'subheading',
        'body2',
        'body1',
        'caption',
        'button'
      ]
    }
  }
}
