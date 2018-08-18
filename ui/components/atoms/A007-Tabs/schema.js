export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    fullWidth: {
      type: 'boolean'
    },
    centered: {
      type: 'boolean'
    },
    indicatorColor: {
      type: 'string',
      enum: ['primary', 'secondary']
    },
    textColor: {
      enum: ['inherit', 'primary', 'secondary']
    },
    value: {
      type: 'integer'
    },
    children: {
      'anyOf': [
        {
          type: 'array',
          items: {
            type: 'object'
          }
        },
        {
          type: 'object'
        }
      ]
    }
  },
  required: ['children', 'value']
}
