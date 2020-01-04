import authConfig from '../../config/auth.json';
import jwt from 'jsonwebtoken';

const generateToken = params => {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
};

export default generateToken;
