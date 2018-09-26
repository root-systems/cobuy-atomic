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
    size: {
      type: 'string',
      enum: ['small', 'medium', 'large']
    },
    iconname: {
      type: 'string'
    }
  },
  required: ['iconname']
}
