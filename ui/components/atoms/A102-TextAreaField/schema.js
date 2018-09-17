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
    label: {
      type: 'string'
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
    readOnly: {
      type: 'string'
    },
    rows: {
      type: 'number'
    },
    rowsMax: {
      type: 'number'
    }
  },
  required: ['id', 'name', 'label']
}
