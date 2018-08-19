export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    index: {
      type: 'integer'
    },
    handleChangeIndex: {
      type: 'function'
    },
    axis: {
      type: 'string',
      enum: ['x', 'x-reverse', 'y', 'y-reverse']
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
  required: ['children', 'handleChangeIndex']
}
