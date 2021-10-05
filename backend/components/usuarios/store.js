//Controller comprueba que este bien todo y pasa la informacion a Store.
//Archivo encargado de gestionar las bases de datos.
//Archivo que dice donde y como se guarda la informacion

const db = require('mongoose');
const Model= require('./model');

db.Promise = global.Promise;
db.connect('mongodb+srv://QuimbayaDev-admin:7QWbDsJNaJGZIskx@clusterdbquimbayadev.upwen.mongodb.net/quimbaya-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});
console.log('[db] Conectada con exito');

function registrarUsuario(usuario){
    const miUsuario = new Model(usuario);
    miUsuario.save();
}

async function listarUsuarios(){
    const usuarios = await Model.find();
    return usuarios;
}

async function actualizarRolUsuario(usuario_id, rol){
    const usuarioEncontrado = await Model.findOne({
        _id: usuario_id
    });
    usuarioEncontrado.rol = rol;
    const usuarioActualizado = await usuarioEncontrado.save();
    return usuarioActualizado;
}

module.exports = {
    add: registrarUsuario,
    list: listarUsuarios,
    actualizarRolUsuario: actualizarRolUsuario,
}