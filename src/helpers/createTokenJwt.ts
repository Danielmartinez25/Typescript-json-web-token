import jwt from "jsonwebtoken";
export default (id : string,key : string | undefined) : string =>{
    return jwt.sign({id},key || 'SECRET_TOKEN',{
        expiresIn: 60 *60*24
    })
}
