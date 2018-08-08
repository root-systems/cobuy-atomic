export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string'
    },
    buttonTitle: {
      type: 'string'
    }
  },
  required: ['color', 'buttonTitle']
}
