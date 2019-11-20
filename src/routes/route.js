import { Router } from 'express';
import { signUpUser, confirmSignUp, signInUser } from '../controllers/user';

const router = Router();

router.post('/user/signup', signUpUser);
router.post('/confirm', confirmSignUp);
router.post('/user/auth', signInUser);

export default router;
