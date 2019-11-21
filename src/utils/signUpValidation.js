import Validator from 'validatorjs';

const validateSignUpField = async (payload) => {
  const rules = {
    fullName: 'required',
    email: 'required|email',
    password: 'required|min:6',
  };
  const errorMessages = {
    'required.fullName': 'The :attribute field is required',
    'required.email': 'The :attribute field is required!',
    'email.email': 'The :attribute field should be a valid email!',
    'required.password': 'The :attribute field is required!',
  };
  return new Validator(payload, rules, errorMessages);
};

const validateSignInField = async (payload) => {
  const rules = {
    email: 'required|email',
    password: 'required|min:6',
  };
  const errorMessages = {
    'required.email': 'The :attribute field is required!',
    'email.email': 'The :attribute field should be a valid email!',
    'required.password': 'The :attribute field is required!',
  };
  return new Validator(payload, rules, errorMessages);
};

const FieldValidator = {
  async signUpCheck(req, res, next) {
    const checkSignUpField = await validateSignUpField(req.body);
    if (checkSignUpField.fails()) {
      const validationErrors = checkSignUpField.errors.all();
      return res.status(400).json({
        status: 'error',
        message: validationErrors,
      });
    }
    return next();
  },
  async signInCheck(req, res, next) {
    const checkSignInField = await validateSignInField(req.body);
    if (checkSignInField.fails()) {
      const validationErrors = checkSignInField.errors.all();
      return res.status(400).json({
        status: 'error',
        message: validationErrors,
      });
    }
    return next();
  },
};

export default FieldValidator;
