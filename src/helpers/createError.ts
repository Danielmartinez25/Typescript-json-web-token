import createError from 'http-errors';
export default (status : number,message : string) : any =>{
    throw createError(status,message)
}