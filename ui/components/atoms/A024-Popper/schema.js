export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    placement: {
      type: 'string',
      enum: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top'
      ]
    },
    anchorEl: {
      type: 'string'
    },
    open: {
      type: 'boolean'
    },
    children: {
      anyOf: [
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
  }
}
