export default (res : any, error : any, method : any) : any => {
    return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || `Ups hubo un error en ${method}`
    })
}