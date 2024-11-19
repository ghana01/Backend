const asyncHandler = (requestHandler) =>{
     return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch
        ((error) =>next(err))
    }
}




export {asyncHandler}

//const asyHandler = (fn)=>{async  ()=>{}}// this code is for understending below code better
/*const asyHandler = (fn)=> async (req,res,next)=>{
    try{
        await fn(req,res,next)

    }catch(error){
        res.status(err.code || 500).json({
            sucess:false,
            message:err.message
        })
    }
}*/