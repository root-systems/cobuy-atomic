export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    primary: {
      type: 'string'
    },
    secondary: {
      type: 'string'
    }
  },
  required: ['primary']
}
