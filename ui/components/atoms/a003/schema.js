export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string'
    },
    size: {
      type: 'integer'
    }
  },
  required: ['color', 'size']
}

// need to update/fix properties
// - background
// - size
