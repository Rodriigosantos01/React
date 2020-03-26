const restfull = require('node-restful');//facilitador para criar API
const mongoose = restfull.mongoose;

const schema = new mongoose.Schema({
    codigo : {type: Number, required: true},
    descricao : {type: String, required: true},
    cargaHoraria: {type: Number, require: true, min: 4, max: 2000},
    preco: {type: Number, required: true},
    categoria: {type: String, uppercase: true, enum:['INFORMATICA', 'REDES', 'ADMINISTRACAO', 'ENGENHARIA']}
});

module.exports = restfull.model('curso', schema);