# User Management System API

![Node.js Version](https://img.shields.io/node/v/express)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Dependencies](https://img.shields.io/david/yourusername/user-management-system)
![Last Commit](https://img.shields.io/github/last-commit/yourusername/user-management-system)

A robust RESTful API built with Express.js and MongoDB for user management with JWT authentication.

## 🚀 Features

- User registration and authentication
- JWT-based authentication using secure cookies
- User search functionality
- Password hashing using bcrypt
- Input validation and sanitization
- Error handling and logging
- Secure cookie management
- MongoDB database integration
- Graceful server shutdown

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Cookie-parser for cookie management
- Express-validator for input validation

## 📁 Project Structure

```plaintext
user-management-system/
├── config/
│   ├── database.js     # Database configuration
│   └── jwt.js          # JWT configuration
├── controllers/
│   └── userController.js
├── middleware/
│   ├── auth.js         # Authentication middleware
│   └── validation.js   # Input validation middleware
├── models/
│   └── User.js         # User model schema
├── routes/
│   └── userRoutes.js   # API routes
├── .env
├── .gitignore
├── package.json
└── server.js


## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
```
2.Install Dependencies:
```bash
npm install
```
3.Create a .env file in the root directory:
```bash
PORT=3000
MONGODB_URI=mongodb://localhost:27017/user-management
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
NODE_ENV=development
```
4.Start the server
```bash
npm start
```
