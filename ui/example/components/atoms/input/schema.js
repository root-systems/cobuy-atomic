export default {
  "$schema": "http://json-schema.org/schema#",
  "type": "object",
  "properties": {
    "placeholder": {
      "type": "string"
    },
    "disabled": {
      "type": "boolean"
    },
    "type": {
      "type": "string",
      "enum": [
        "date",
        "month",
        "number",
        "password",
        "search",
        "text"
      ]
    },
    "value": {
      "type": "string"
    }
  },
  "required": ["type"]
}