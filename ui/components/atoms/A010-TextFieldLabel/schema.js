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
    name: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    readOnly: {
      type: 'string'
    }
  },
  required: ['id', 'type', 'name', 'label']
}
