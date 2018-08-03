export default {
  "$schema": "http://json-schema.org/schema#",
  "type": "object",
  "properties": {
    "checked": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    },
    "text": {
      "type": "string"
    },
    "onClick": {
      "instanceOf": "function"
    }
  },
  "required": ["text"]
}
