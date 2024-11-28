const jwt = require('jsonwebtoken');
const JWT_SECRET = '6c3db75b190e6ef63405b1c07aa675dce711297aa2968202d558b5af82393bab'; // Use the same secret as in auth.js

module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
