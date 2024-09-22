const {Permiso, PermisoSchema} =require ('./permiso.js')

function setupModels (sequelize){
    Permiso.init(PermisoSchema, Permiso.config(sequelize))
}

module.exports =setupModels