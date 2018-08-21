export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    color: {
      type: 'string'
    },
    position: {
      type: 'string',
      enum: ['fixed', 'absolute', 'sticky', 'static']
    },
    variant: {
      variant: 'string',
      enum: ['regular', 'dense']
    }

  },
  required: ['position']
}
