export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    align: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    gutterBottom: {
      type: 'boolean'
    },
    noWrap: {
      type: 'boolean'
    },
    paragraph: {
      type: 'boolean'
    }
  },
  required: ['title']
}
