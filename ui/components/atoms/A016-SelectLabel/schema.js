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
    onChange: {
      instanceOf: 'function'
    },
    readOnly: {
      type: 'string'
    },
    error: {
      type: 'boolean'
    },
    children: {
      anyOf: [
        {
          type: 'array',
          items: {
            type: 'object'
          }
        },
        {
          type: 'object'
        }
      ]
    },
    label: {
      type: 'string'
    }
  },
  required: ['id', 'value', 'name', 'onChange', 'children', 'label']
}
