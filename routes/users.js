/**
 * User API controller.
 *
 * @author Alex TSANG <alextsang@live.com>
 *
 * @license BSD-3-Clause
 */

'use strict';

const express = require('express');

const userValidator = require('../validators/user');

const RADIX = 10;

const router = express.Router();
const userStore = new Map();

router.post('/', (request, response) => {
  if (!userValidator.isValidRegistration(request.body)) {
    response.status(400)
      .type('text/plain')
      .end('Invalid registration.');
    return;
  }
  const id = userStore.size;
  userStore.set(id, request.body);
  response.status(200)
    .end(JSON.stringify({ id }));
});

router.get('/', (request, response) => {
  const users = [];
  userStore.forEach((user, id) => {
    users.push({
      id,
      user
    });
  });
  response.status(200)
    .type('application/json')
    .end(JSON.stringify(users));
});

router.put('/:id', (request, response) => {
  const id = parseInt(request.params.id, RADIX);
  const updateData = {
    id,
    ...request.body
  };
  if (!userValidator.isValidUpdate(updateData)) {
    response.status(400)
      .type('text/plain')
      .end('Invalid update.');
    return;
  }
  if (!userStore.has(id)) {
    response.status(404)
      .type('text/plain')
      .end('Cannot find the user.');
    return;
  }
  const user = userStore.get(id);
  user.name = request.body.name;
  user.email = request.body.email;
  response.status(200)
      .type('text/plain')
      .end('OK.');
    return;
});

module.exports = router;
