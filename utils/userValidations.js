const Joi = require('@hapi/joi');


const message = "Password must be between 6-16 characters, upper and lower case characters and numbers are allowed"

const email = Joi.string().email({ minDomainSegments: 2}).required();

const password = Joi.string().pattern(/^[a-zA-Z0-9]{6,16}$/).required().messages({message});

const name = Joi.string().pattern(/^[a-zA-Z' ]{3,20}$/).required();

exports.loginSchema = Joi.object({ email, password});

exports.registerSchema = Joi.object({ name, email, password});