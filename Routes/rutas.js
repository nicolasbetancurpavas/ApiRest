import express from 'express'
import { ControladorVendedor } from '../Controllers/ControladorVendedor.js'

let controladorVendedor = new ControladorVendedor()//Usando el controlador

export let rutas = express.Router()

rutas.get('/vendedores', controladorVendedor.buscarVendedores)
rutas.get('/vendedor/:id', controladorVendedor.buscarVendedorPorId)
rutas.post('/vendedores', controladorVendedor.registrarVendedor)
rutas.put('/vendedor/:id', controladorVendedor.editarVendedor)


