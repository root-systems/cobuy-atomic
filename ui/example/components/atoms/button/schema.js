export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    title: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    elevation: {
      type: 'integer',
      minimum: 1,
      maximum: 5
    },
    onClick: {
      instanceOf: 'function'
    }
  },
  required: ['title']
}
