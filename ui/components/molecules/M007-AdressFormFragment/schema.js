export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    addressName: {
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
    addressLineOneField: {
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
    addressLineTwoField: {
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
    suburbField: {
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
    cityField: {
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
    postCodeField: {
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
    countryField: {
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
