export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    selected: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    options: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer'
          },
          value: {
            type: 'string'
          }
        }
      }
    }
  }
}
