import express from 'express'
import { register,login ,profile} from '../controllers/user.js';
import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();

// user register
router.post("/register", register);
// user login
router.post('/login',login)
router.get('/profile',Authenticate,profile)

export default router