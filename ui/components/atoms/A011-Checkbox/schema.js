export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    checked: {
      type: 'boolean'
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
    indeterminate: {
      type: 'boolean'
    },
    value: {
      type: 'string'
    }
  },
  required: ['value']
}
