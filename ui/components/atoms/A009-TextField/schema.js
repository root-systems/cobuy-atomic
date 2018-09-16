export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    value: {
      anyOf: [
        {
          type: 'string'
        },
        {
          type: 'number'
        }
      ]
    },
    name: {
      type: 'string'
    },
    label: {
      type: 'string'
    },
    required: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean'
    },
    placeholder: {
      type: 'string'
    },
    readOnly: {
      type: 'string'
    }
  },
  required: ['id', 'name']
}
