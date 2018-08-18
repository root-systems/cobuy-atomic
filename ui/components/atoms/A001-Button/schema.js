export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string',
      enum: ['default', 'inherit', 'primary', 'secondary']
    },
    disabled: {
      type: 'boolean'
    },
    fullWidth: {
      type: 'boolean'
    },
    text: {
      type: 'string'
    },
    size: {
      type: 'string',
      enum: ['small', 'medium', 'large']
    }
  },
  required: ['color', 'text']
}
