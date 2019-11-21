/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';


const generateToken = (user) => jwt.sign(user, process.env.SECRET, { expiresIn: '1 day' });

export default generateToken;
