const Joi = require('@hapi/joi');

const email = Joi.string().email({ minDomainSegments: 2}).min(8).max(30).required().messages({
  'string.email': `Not a Valid E-mail, valid emails are of the form name@domain.tld `,
  'string.empty': `E-mail cannot be an empty field`,
  'string.min': `E-mail should have a minimum length of {#limit}`,
  'string.max': `E-mail should have a maximum length of {#limit}`,

});

const password = Joi.string().min(6).max(16).pattern(/^[a-zA-Z0-9]/).required().messages({
  'string.pattern.base': `Password can only contain upper case and lower case characters and numbers`,
  'string.empty': `Password cannot be an empty field`,
  'string.min': `Password should have a minimum length of {#limit}`,
  'string.max': `Password should have a maximum length of {#limit}`,

})
// const password = Joi.string()
// .pattern(/^[a-zA-Z0-9]{6,16}$/).error(new Error(message))
// .required().error(new Error('Password cannot be empty'));


const name = Joi.string().min(8).max(30).pattern(/^[a-zA-Z' ]{3,20}$/).required().messages({
  'string.pattern.base': `Your name can only contain lower and uppercase letters and apostrophes`,
  'string.empty': `Name cannot be an empty field`,
  'string.min': `Name should have a minimum length of {#limit}`,
  'string.max': `Name should have a maximum length of {#limit}`,

});

exports.loginSchema = Joi.object({ email, password});

exports.registerSchema = Joi.object({ name, email, password});