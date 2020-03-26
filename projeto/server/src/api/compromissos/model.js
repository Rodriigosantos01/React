const restfull = require('node-restful');//facilitador para criar API
const mongoose = restfull.mongoose;

const schema = new mongoose.Schema({
    data : {type: Date, default: new Date()},
    descricao : {type: String, required: true},
    responsavel: {type: String, require: true},
    telefone: {type: String, required: true}    
});

module.exports = restfull.model('compromissos', schema);