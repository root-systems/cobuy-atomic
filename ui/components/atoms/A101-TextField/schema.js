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
    name: {
      type: 'string'
    },
    label: {
      type: 'string'
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
  required: ['id', 'name', 'label']
}
