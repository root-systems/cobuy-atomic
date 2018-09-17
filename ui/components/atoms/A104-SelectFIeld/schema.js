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
    readOnly: {
      type: 'string'
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
  required: ['id', 'name', 'children', 'label']
}
