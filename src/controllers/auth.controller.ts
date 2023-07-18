import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import errorResponse from "../helpers/errorResponse";
import createTokenJwt from "../helpers/createTokenJwt";
import createError from "../helpers/createError";
export const signup = async (req: Request, res: Response) => {
    try {

        const { username, email, password } = req.body
        const user: IUser = new User({
            username,
            email,
            password
        })
        user.password = await user.encryptPassword(password)

        const newUser = await user.save();
        const token = createTokenJwt(newUser._id,process.env.SECRET_TOKEN );
        
        return res.status(200).json(
            {
                ok: true,
                data: newUser,
                token : token 
            }
        )
    } catch (e) {
        return errorResponse(res,e,'Signup')
    }
};

export const signin = async (req: Request, res: Response) => {
try {
    const { email, password } = req.body;
    const user = await User.findOne({email : email});
    if (!user) {
        createError(400, 'Invalid email')
    }
    const correctPassword = await user?.validatePassword(password);
    if (!correctPassword) {
        createError(400, 'Invalid password')
    }
    const token = createTokenJwt(user?._id,process.env.SECRECT_TOKEN)
    res.header('auth-token',token);
    return res.status(200).json({
        ok : true,
        status: 200,
        data : user,
        token : token 
    })
} catch (e) {
    return errorResponse(res,e,'signin')
}
};

export const profile = async (req: Request, res: Response) => {
   try {
       const user = await User.findById(req.userId);
       if (!user) {
           throw createError(404, 'No user found');
       }
       return res.status(200).json({
        ok : true,
        status : 200,
        data : user
       })
   } catch (error) {
    return errorResponse(res,error,'profile')
   }
};