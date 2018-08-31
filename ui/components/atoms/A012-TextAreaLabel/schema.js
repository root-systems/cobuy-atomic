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
    label: {
      type: 'string'
    },
    error: {
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
    readOnly: {
      type: 'string'
    }
  },
  required: ['id', 'name', 'label']
}
