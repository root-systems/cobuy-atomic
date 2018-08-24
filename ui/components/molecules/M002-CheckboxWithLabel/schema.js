export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    label: {
      type: 'string'
    },
    labelPlacement: {
      type: 'string',
      enum: ['end', 'start']
    },
    disabled: {
      type: 'boolean'
    }
  }
}
