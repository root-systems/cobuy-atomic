export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    label: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    iconname: {
      type: 'string'
    }
  },
  oneOf: [
    {
      required: ['iconname']
    },
    {
      required: ['label']
    },
    {
      required: ['label', 'iconname']
    }
  ]
}
