import { Router } from 'express';
import { signUpUser, confirmSignUp, signInUser } from '../controllers/user';
import FieldValidator from '../utils/signUpValidation';

const router = Router();

router.post('/user/signup', FieldValidator.signUpCheck, signUpUser);
router.post('/confirm', confirmSignUp);
router.post('/user/auth', FieldValidator.signInCheck, signInUser);

export default router;
