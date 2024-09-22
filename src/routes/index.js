const express=require('express')

const permisosRouter=require('./permisoRouter')

function routerApi(app){
    const router=express.Router()
    app.use('/api/v1', router)
    router.use('/permisos',permisosRouter)
}

module.exports=routerApi