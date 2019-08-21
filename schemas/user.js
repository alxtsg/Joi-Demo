/**
 * User-related schemas.
 *
 * @author Alex TSANG <alextsang@live.com>
 *
 * @license BSD-3-Clause
 */

'use strict';

const joi = require('@hapi/joi');

const baseSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required()
});

const registrationSchema = baseSchema.keys({
  dob: joi.date().iso().min('1900-01-01')
});

const updateSchema = baseSchema.keys({
  id: joi.number().integer().min(0).required()
});

module.exports = {
  registrationSchema,
  updateSchema
};
