const service = require('./model');

service.methods(['get', 'post', 'delete', 'put']);
service.updateOptions({ new: true, runValidators: true });

module.exports = service;