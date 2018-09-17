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
    label: {
      type: 'string'
    },
    labelPlacement: {
      type: 'string',
      enum: ['end', 'start']
    },
    name: {
      type: 'string'
    },
    value: {
      type: 'string'
    }
  },
  required: ['name', 'id', 'ariaLabel', 'label']
}
