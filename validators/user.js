/**
 * User-related validator.
 *
 * @author Alex TSANG <alextsang@live.com>
 *
 * @license BSD-3-Clause
 */

'use strict';

const schemas = require('../schemas/user');

const { registrationSchema, updateSchema } = schemas;

const isValidRegistration = (data) => {
  const result = registrationSchema.validate(data);
  if (result.error !== null) {
    console.error(result.error);
  }
  return (result.error === null);
};

const isValidUpdate = (data) => {
  const result = updateSchema.validate(data);
  if (result.error !== null) {
    console.error(result.error);
  }
  return (result.error === null);
};

module.exports = {
  isValidRegistration,
  isValidUpdate
};
