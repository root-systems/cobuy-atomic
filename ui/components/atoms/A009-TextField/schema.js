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
    type: {
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
    helperText: {
      type: 'string'
    },
    helpError: {
      type: 'boolean'
    },
    error: {
      type: 'boolean'
    },
    placeholder: {
      type: 'string'
    },
    onChange: {
      instanceOf: 'function'
    },
    readOnly: {
      type: 'string'
    },
    multiline: {
      type: 'boolean'
    },
    rowsMax: {
      type: 'number'
    }
  },
  required: ['id', 'type', 'name']
}
