import { tokenValidation } from '../helpers/verifyToken';
import { profile, signin, signup } from '../controllers/auth.controller';
import { Router } from "express";
const router = Router();
router 
.post('/signup',signup)
    .post('/signin', signin)
    .get('/profile',tokenValidation, profile)
export default router