import mongoose from "mongoose";

const Schema = mongoose.Schema

const EsquemaVendedor = new Schema({

    idVendedor: {
        required: true,
        type: Number
    },
    nombre: {
        required: true,
        type: String
    },
    correo: {
        required: true,
        type: String
    },
    totalComision: {
        required: true,
        type: Number
    }
})

export const modeloVendedor = mongoose.model('Vendedores', EsquemaVendedor)