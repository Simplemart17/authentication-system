import uuid from 'uuid/v4';
import dbModel from '../models';
import generateToken from '../middlewares/Auth';
import confirmationMail from '../utils/confirmationMail';

export const signUpUser = async (req, res) => {
  try {
    const { body } = req;
    const verificationToken = uuid();
    const user = await dbModel.User.create({ ...body, verificationToken });

    if (user) {
      confirmationMail(req.body.email, verificationToken);
      return res.status(201).json({
        status: 'success',
        message: `Use the link http://${process.env.URL_HOST}:5000/v1/confirm?verificationToken=${verificationToken}`,
      });
    }
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      if (error.fields.email) {
        return res.status(409).json({
          status: 'error',
          message: 'This Email Already Exist',
        });
      }
    }
    return res.status(500).json({
      status: 'error',
      message: 'Network error!',
    });
  }
};

export const confirmSignUp = async (req, res) => {
  try {
    const { email } = req.body;
    const { verificationToken } = req.query;
    let user = await dbModel.User.findOne({ where: { verificationToken } });

    if (!user) {
      return res.status(403).json({
        status: 'error',
        message: 'Invalid verification token, please reauthenticate!',
      });
    }
    user = await dbModel.User.findOne({ where: { email } });
    if (!user) {
      return res.status(403).json({
        status: 'error',
        message: 'Unable to find the associated user!',
      });
    }
    user = await user.update({ verified: true, verificationToken: null });
    return res.status(200).json({
      status: 'success',
      message: 'Verification successful!',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: 'We could not verify you at the moment, please try again',
    });
  }
};

export const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await dbModel.User.findOne({ where: { email } });

    if (!user) {
      return res.status(406).json({
        status: 'error',
        message: 'Incorrect email address',
      });
    }
    if (!user.comparePassword(password, user.password)) {
      return res.status(406).json({
        status: 'error',
        message: 'Incorrect password!',
      });
    }
    if (!user.verified) {
      return res.status(406).json({
        status: 'error',
        message: 'You are not yet verified!',
      });
    }
    if (user) {
      const { id, fullName, role } = user;
      return res.status(201).json({
        status: 'success',
        data: {
          token: generateToken({ id, fullName, role }),
        },
      });
    }
  } catch (error) {
    return res.status(401).json({
      status: 'error',
      message: 'Network error, please try again!',
    });
  }
};
