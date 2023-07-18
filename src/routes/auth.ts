import { profile, signin, signup } from '../controllers/auth.controller';
import { Router } from "express";
const router = Router();
router 
.post('/signup',signup)
    .post('/signin', signin)
    .get('/profile', profile)
export default router