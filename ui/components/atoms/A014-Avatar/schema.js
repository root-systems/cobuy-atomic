export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    alt: {
      type: 'string'
    },
    src: {
      type: 'string'
    },
    children: {
      type: 'object'
    }
  },
  required: ['alt', 'src']
}
