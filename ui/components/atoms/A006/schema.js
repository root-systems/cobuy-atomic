export default {
  $schema: 'http://json-schema.org/schema#',
  type: 'object',
  properties: {
    alignment: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    gutterBottom: {
      type: 'boolean'
    },
    noWrap: {
      type: 'boolean'
    },
    paragraph: {
      type: 'boolean'
    },
    // variant: {
    //   type: 'string',
    //   enum: [
    //     'display4',
    //     'display3', 
    //     'display2',
    //     'display1',
    //     'headline',
    //     'title',
    //     'subheading',
    //     'body2',
    //     'body1',
    //     'caption',
    //     'button'
    //   ]
    // },
  },
  required: ['title']
}
