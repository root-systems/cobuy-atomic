export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    avatar: {
      type: 'object',
      properties: {
        alt: {
          type: 'string'
        },
        src: {
          type: 'string'
        }
      }
    },
    nameField: {
      type: 'object',
      properties: {
        value: {
          type: 'string'
        },
        error: {
          type: 'boolean'
        }
      }
    },
    descriptionField: {
      type: 'object',
      properties: {
        value: {
          type: 'string'
        }
      }
    },
    websiteField: {
      type: 'object',
      properties: {
        value: {
          type: 'string'
        },
        error: {
          type: 'boolean'
        }
      }
    },
    emailField: {
      type: 'object',
      properties: {
        value: {
          type: 'string'
        },
        error: {
          type: 'boolean'
        }
      }
    }
  }
}
