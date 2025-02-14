const jwt = require('jsonwebtoken');

const jwtConfig = {
  // JWT options
  options: {
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    issuer: 'user-management-system',
    audience: 'user-management-system-client',
  },

  // Cookie options for JWT
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    path: '/',
  },

  // Generate JWT token
  generateToken: (userId) => {
    return jwt.sign(
      { userId },
      process.env.JWT_SECRET_KEY,
      jwtConfig.options
    );
  },

  // Verify JWT token
  verifyToken: (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET_KEY, jwtConfig.options);
    } catch (error) {
      throw new Error('Invalid token');
    }
  },

  // Get token from cookie
  getTokenFromCookie: (req) => {
    return req.cookies.token;
  },

  // Set token in cookie
  setTokenInCookie: (res, token) => {
    res.cookie('token', token, jwtConfig.cookieOptions);
  },

  // Clear token from cookie
  clearTokenFromCookie: (res) => {
    res.clearCookie('token', { path: '/' });
  }
};

module.exports = jwtConfig;