const express=require('express')

const router=express.Router()

const permisoController=require('../controllers/permisoController')

router
.get('/',permisoController.get)
.get('/:id',permisoController.getById)
.post('/',permisoController.create)
.put('/:id',permisoController.update)
.delete('/:id',permisoController._delete)


module.exports=router