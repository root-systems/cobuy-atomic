export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    pageTitle: {
      type: 'string'
    },
    menuClick: {
      instanceOf: 'function'
    },
    profileClick: {
      instanceOf: 'function'
    }
  },
  required: ['pageTitle']
}
