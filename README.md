# User-registration

## Features
- User registration with profile picture upload.
- Input validation using `express-validator`.
- Password hashing using `bcrypt`.
- JSON Web Token (JWT) authentication.
- File upload with `multer`.

npm i for install packages.

nodemon app.js => Start server.

Register a user by sending a POST request to /api/register.   
Include name, email, password, confirmPassword and profile (file) in the request body.
