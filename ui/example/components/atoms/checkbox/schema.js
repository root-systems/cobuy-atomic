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
    "error": {
      "type": "boolean"
    },
    "onChange": {
      "instanceOf": "function"
    }
  },
  "required": ["text"]
}
