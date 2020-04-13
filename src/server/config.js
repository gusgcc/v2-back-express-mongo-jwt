/*configuracion de servidor*/
const express = require("express")
const cors = require("cors")
const routes = require("../routes/index")
const jwt = require("../config/jwt")
const morgan = require("morgan")
const errorHandler = require("../helpers/error-handler");
//configuramos el app
module.exports = app => {
    //configuraciones 
    app.set("port", process.env.PORT)

    //middlewares
    app.use(cors());//permite origen cruzado
    app.use(morgan("dev"))//ver tipo de solicitud
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    app.use(jwt())//para verificar si el user tiene token correcto
    app.use(errorHandler);//capturador de errores

    routes(app)//para configurar las rutas
    return app;
}