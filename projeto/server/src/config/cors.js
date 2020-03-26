module.exports = (_, response, next) =>{
    response.header('access-Control-Allow-Origin',"*");
    response.header('Access-Controll-Allow-Methods', "GET, POST, PUT, DELETE");
    response.header('Access-Controll-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
};