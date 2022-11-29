import 'reflect-metadata';
import express from "express";
var http = require('http');
import { Container } from 'typedi';
import path from "path";
import createError from "http-errors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import userRouter from "./src/user/controller/user.controller";
import { PrismaClient } from '@prisma/client';

Container.set('prismaClient', new PrismaClient())
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/client', express.static(path.join(__dirname, 'public/client/angular-hero')));

app.use('/user', userRouter);


var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


let server = http.createServer(app)

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val: string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error: { syscall: string; code: any; }) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();

  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr?.port;
  console.log('Listening on ' + bind);
}
export default app;
