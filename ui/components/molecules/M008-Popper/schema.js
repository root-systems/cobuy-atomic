export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    anchorEl: {
      type: 'string'
    },
    modifiers: {
      type: 'object'
    },
    open: {
      type: 'boolean'
    },
    disablePortal: {
      type: 'boolean'
    },
    keepMounted: {
      type: 'boolean'
    },
    transition: {
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
