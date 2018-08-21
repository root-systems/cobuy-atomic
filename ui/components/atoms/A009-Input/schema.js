export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    autoFocus: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean'
    },
    disableUnderline: {
      type: 'boolean'
    },
    error: {
      type: 'boolean'
    },
    fullWidth: {
      type: 'boolean'
    },
    id: {
      type: 'string'
    },
    margin: {
      type: 'string',
      enum: ['dense', 'none']
    },
    multiline: {
      type: 'boolean'
    },
    name: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    readOnly: {
      type: 'boolean'
    },
    type: {
      type: 'string'
    }
  },
  required: ['id', 'type', 'name']
}
