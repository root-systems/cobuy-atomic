export default {
  "$schema": "http://json-schema.org/schema#",
  "type": "object",
  "properties": {
    "elevation": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5
    },
    "element": {
      "type": "object"
    }
  },
  "required": ["element"]
}
