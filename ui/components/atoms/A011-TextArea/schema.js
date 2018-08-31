export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    value: {
      type: 'string'
    },
    required: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean'
    },
    name: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    onChange: {
      instanceOf: 'function'
    },
    helperText: {
      type: 'string'
    },
    error: {
      type: 'boolean'
    },
    readOnly: {
      type: 'string'
    }
  },
  required: ['id', 'name', 'placeholder']
}
