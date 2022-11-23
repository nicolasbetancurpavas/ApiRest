import * as dotenv from 'dotenv' // variables de entorno 
dotenv.config()

import { ServidorAPI } from './API/server.js'

let server = new ServidorAPI() //Intancia de una clase (OBJETO)
server.despertarServidor()

