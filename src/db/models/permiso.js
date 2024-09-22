const {Model, DataTypes}=require('sequelize')

const PERMISO_TABLE='permisos'

class Permiso extends Model{
    static config(sequelize){
        return{
            sequelize,
            tableName: PERMISO_TABLE,
            modelName: 'Permiso'
            
        }
    }
}

const PermisoSchema= {
    id_permiso:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER

    },

    nombre_permiso:{
        type:DataTypes.STRING,
        field:'nombre_permiso'
    },

    fecha_creacion:{
        type:DataTypes.DATE,
        default:Date.now,
        field:'fecha_creacion'
    },

    estado_permiso:{
        type:DataTypes.BOOLEAN,
        field:'estado_permiso'
        
    }
}

module.exports = {Permiso, PermisoSchema}