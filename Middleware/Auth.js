const jwtConfig = require('../config/JWT');

const auth = async (req, res, next) => {
  try {
    const token = jwtConfig.getTokenFromCookie(req);
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Authentication required' 
      });
    }

    const decoded = jwtConfig.verifyToken(token);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ 
      success: false, 
      message: 'Invalid or expired token' 
    });
  }
};

module.exports = auth;