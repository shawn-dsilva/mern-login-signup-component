const Joi = require('@hapi/joi');

const email = Joi.string().email({ minDomainSegments: 2}).required();

const password = Joi.string().pattern(/^[a-zA-Z0-9]{6,16}$/).required();

const name = Joi.string().pattern(/^[a-zA-Z' ]{3,20}$/).required();

exports.loginSchema = Joi.object({ email, password});

exports.registerSchema = Joi.object({ name, email, password});