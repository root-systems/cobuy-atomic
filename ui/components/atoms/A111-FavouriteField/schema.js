export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    ariaLabel: {
      type: 'string'
    },
    color: {
      type: 'string',
      enum: ['default', 'primary', 'secondary']
    },
    disabled: {
      type: 'boolean'
    },
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    value: {
      type: 'string'
    }
  },
  required: ['id', 'name', 'ariaLabel']
}
