//====== PUERTO ======//
process.env.PORT = process.env.PORT || 3000;

//====== ENTORNO ======//
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====== BASE DE DATOS ======//
let urlDB;

if (process.env.NODE_DEV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://valentramos:lizig66cg@ds263988.mlab.com:63988/cafe';
}

process.env.URLDB = urlDB;