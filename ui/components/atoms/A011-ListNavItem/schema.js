export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    handleClick: {
      instanceOf: 'function'
    },
    primaryText: {
      type: 'string'
    },
    secondaryText: {
      type: 'string'
    }
  },
  required: ['handleClick', 'primaryText']
}
