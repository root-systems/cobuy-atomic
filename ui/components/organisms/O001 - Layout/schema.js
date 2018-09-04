export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    open: {
      type: 'boolean'
    },
    handleDrawerToggle: {
      instanceOf: 'function'
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
    }
  },
  required: ['open', 'handleDrawerToggle', 'children']
}
