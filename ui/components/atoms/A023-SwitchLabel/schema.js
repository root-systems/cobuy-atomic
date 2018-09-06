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
    value: {
      type: 'string'
    },
    ariaLabel: {
      type: 'string'
    },
    label: {
      type: 'string'
    },
    labelPlacement: {
      type: 'string',
      enum: ['end', 'start']
    }
  },
  required: ['value', 'id', 'ariaLabel']
}
