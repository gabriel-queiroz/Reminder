import authConfig from '../../config/auth';
import jwt from 'jsonwebtoken';

const generateToken = params => {
  return jwt.sign(params, authConfig, { expiresIn: 86400 });
};

export default generateToken;
