export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    handleClick: {
      instanceOf: 'function'
    },
    avatar: {
      type: 'object',
      properties: {
        iconname: {
          type: 'string'
        },
        src: {
          type: 'string'
        },
        alt: {
          type: 'string'
        },
        text: {
          type: 'string'
        }
      },
      required: ['iconname']
    },
    primaryText: {
      type: 'string'
    },
    secondaryText: {
      type: 'string'
    }
  },
  required: ['handleClick', 'primaryText']
}
