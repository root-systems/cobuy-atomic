export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string',
      enum: ['default', 'inherit', 'primary', 'secondary']
    },
    onClick: {
      instanceOf: 'function'
    },
    disabled: {
      type: 'boolean'
    },
    fullWidth: {
      type: 'boolean'
    },
    size: {
      type: 'string',
      enum: ['small', 'medium', 'large']
    },
    text: {
      type: 'string'
    }
  },
  required: ['color', 'onClick', 'text']
}
