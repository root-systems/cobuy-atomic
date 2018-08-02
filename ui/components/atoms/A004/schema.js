export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string'
    },
    appBarTitle: {
      type: 'string'
    }
  },
  required: ['color', 'appBarTitle']
}
