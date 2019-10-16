const Joi = require('@hapi/joi');


const message = "Password must be between 6-16 characters, upper and lower case characters and numbers are allowed"

const email = Joi.string().email({ minDomainSegments: 2}).required();

const password = Joi.string().min(6).max(16).pattern(/^[a-zA-Z0-9]/).required().messages({
  'string.pattern.base': `password should be a type of 'text'`,
  'string.empty': `Password cannot be an empty field`,
  'string.min': `Password should have a minimum length of {#limit}`,
})
// const password = Joi.string()
// .pattern(/^[a-zA-Z0-9]{6,16}$/).error(new Error(message))
// .required().error(new Error('Password cannot be empty'));


const name = Joi.string().pattern(/^[a-zA-Z' ]{3,20}$/).required();

exports.loginSchema = Joi.object({ email, password});

exports.registerSchema = Joi.object({ name, email, password});