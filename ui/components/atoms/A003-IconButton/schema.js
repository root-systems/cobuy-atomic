export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string',
      enum: ['default', 'inherit', 'primary', 'secondary']
    },
    disabled: {
      type: 'boolean'
    },
    onClick: {
      instanceOf: 'function'
    },
    iconname: {
      type: 'string'
    },
    ariaLabel: {
      type: 'string'
    }
  },
  required: ['iconname', 'ariaLabel', 'onClick']
}
