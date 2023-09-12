const Ajv = require("ajv")
const ajv = new Ajv()

const schema = {
    type: "object",
    properties: {
      action: { type: "string", enum: ["CARD_PURCHASE"] },
      billingAddress: {
        type: "object",
        properties: {
          addressLine1: { type: "string" },
          addressLine2: { type: "string" },
          city: { type: "string" },
          country: { type: "string" },
          postCode: { type: "string", pattern: "^\\d{5}(?:-\\d{4})?$" }, // Postal code pattern
        },
        required: ["addressLine1", "city", "country", "postCode"],
        additionalProperties: false,
      },
      cardholderMobileNumber: { type: "string" },
      currency: { type: "string" },
      nameOnCard: { type: "string" },
      tag: { type: "string" },
    },
    required: ["action", "billingAddress", "currency", "cardholderMobileNumber", "nameOnCard"],
    additionalProperties: false,
};

const validateSchema = (data) => {
    const valid = ajv.validate(schema, data);
    if (!valid) console.log(ajv.errors);
    return valid;
}

module.exports = validateSchema;