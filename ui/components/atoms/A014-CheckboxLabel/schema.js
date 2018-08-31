export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    label: {
      type: 'string'
    },
    labelPlacement: {
      type: 'string',
      enum: ['end', 'start']
    },
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
    },
    ariaLabel: {
      type: 'string'
    }
  },
  required: ['value', 'label', 'id', 'ariaLabel']
}
