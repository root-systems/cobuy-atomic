export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    position: {
      type: 'string',
      enum: ['fixed', 'absolute', 'sticky', 'static']
    }
  },
  required: ['position']
}
