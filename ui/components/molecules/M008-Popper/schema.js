export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    open: {
      type: 'boolean'
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
  }
}
