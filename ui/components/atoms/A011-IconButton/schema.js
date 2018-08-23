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
    handleClick: {
      instanceOf: 'function'
    },
    iconname: {
      type: 'string'
    },
    ariaLabel: {
      type: 'string'
    }
  },
  required: ['iconname', 'ariaLabel', 'handleClick']
}
