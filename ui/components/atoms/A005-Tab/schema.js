export default {
  $schema: 'http://json-schema.org/schema#',
  'type': 'object',
  'properties': {
    'label': {
      'type': 'string'
    },
    'disabled': {
      'type': 'boolean'
    },
    'icon': {
      'type': 'string'
    },
  },
  'oneOf': [
    {
      'required': [
          'icon'
      ]
    },
    {
      'required': [
          'label'
      ]
    },
    {
      'required': [
        'label',
        'icon'
      ]  
    }
  ]
}