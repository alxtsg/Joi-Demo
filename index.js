/**
 * Demo web application.
 *
 * @author Alex TSANG <alextsang@live.com>
 *
 * @license BSD-3-Clause
 */

'use strict';

const express = require('express');

const usersAPI = require('./routes/users');

const app = express();
const port = 8080;

app.use(express.urlencoded({
  extended: true
}));
app.use('/users', usersAPI);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
