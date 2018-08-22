export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string'
    },
    pageTitle: {
      type: 'string'
    }
  },
  required: ['color', 'pageTitle']
}
