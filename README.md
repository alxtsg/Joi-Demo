# joi-demo

## Description

Demonstrates the usage of [joi](https://github.com/hapijs/joi).

**This project is no longer being maintained.**

## Requirements

* Node.js

## Installation

Run:

```
npm install --production
```

## Usage

Start the web application:

```
npm run start
```

The server listens on the port 8080. The validation errors are printed on the
standard output.

### Register new user

Run:

```
curl -s -X POST \
  -d name=Alex \
  -d email='me@example.com' \
  -d dob='1990-01-01' \
  http://127.0.0.1:8080/users
```

New user has been registered successfully.

### Register new user, missing name.

Run:

```
curl -s -X POST \
  -d email='me@example.com' \
  -d dob='1990-01-01' \
  http://127.0.0.1:8080/users
```
Error:

```
ValidationError: child "name" fails because ["name" is required]
```

### Register new user, invalid e-mail address.

Run:

```
curl -s -X POST \
  -d name=Alex \
  -d email='banana' \
  -d dob='1990-01-01' \
  http://127.0.0.1:8080/users
```

Error:

```
ValidationError: child "email" fails because ["email" must be a valid email]
```

### Register new user, invalid date of birth (DOB).

Run:

```
curl -s -X POST \
  -d name=Alex \
  -d email='me@example.com' \
  -d dob='1990-99-99' \
  http://127.0.0.1:8080/users
```

Error:

```
ValidationError: child "dob" fails because ["dob" must be a valid ISO 8601 date]
```

### Get all users.

Run:

```
curl -s http://127.0.0.1:8080/users
```

All users are listed.

### Update a user.

Run:

```
curl -s -X PUT \
  -d name=Alex \
  -d email='alex@example.com' \
  http://127.0.0.1:8080/users/0
```

The user has been updated successfully.

### Update a user, missing name.

Run:

```
curl -s -X PUT \
  -d email='alex@example.com' \
  http://127.0.0.1:8080/users/0
```

Error:

```
ValidationError: child "name" fails because ["name" is required]
```

### Update a user, invalid e-mail address.

Run:

```
curl -s -X PUT \
  -d name=Alex \
  -d email='hamburger' \
  http://127.0.0.1:8080/users/0
```

Error:

```
ValidationError: child "email" fails because ["email" must be a valid email]
```

### Update a user, with additional parameters.

Run:

```
curl -s -X PUT \
  -d name=Alex \
  -d email='alex@example.com' \
  -d dob='1989-01-01' \
  http://127.0.0.1:8080/users/0
```

Error:

```
ValidationError: "dob" is not allowed
```

## License

[The BSD 3-Clause License](http://opensource.org/licenses/BSD-3-Clause)
