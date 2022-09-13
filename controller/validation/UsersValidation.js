const validators = require("joi");
const db = require("../../models/db/db");

class usersValidation {
  async validationRegister(userDto) {
    const schemaValidator = validators.object({
      firstName: validators.string().required().alphanum(),
      lastName: validators.string().required().alphanum(),
      Nim: validators.number().required(),
      Address: validators.string().required().alphanum(),
      Faculty: validators.string().required(),
      Major: validators.string().required(),
      Email: validators
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      Password: validators.string().required().alphanum(),
      Status: validators.string().required().alphanum(),
    });
    const valid = schemaValidator.validate(userDto);
    return valid;
  }

  async validationLogin(userDto) {
    const schemaValidator = validators.object().keys({
      Email: validators.string().email().required(),
      Password: validators.string().required().alphanum(),
    });
    const valid = schemaValidator.validate(userDto);
    return valid;
  }
  async isEmailUsed(Email) {
    return await db("student").where("email", Email).count().first();
  }
}
module.exports = new usersValidation();
