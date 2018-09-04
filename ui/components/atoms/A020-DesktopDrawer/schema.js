export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
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
  required: ['children']
}
