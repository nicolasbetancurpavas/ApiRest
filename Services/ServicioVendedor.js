import { modeloVendedor } from '../Models/modeloVendedor.js'

export class ServicioVendedor {

    //aqui programo metodos para cada una de las
    //consultas que quiero hacer en bd

    async buscarVendedores() {
        let habitaciones = await modeloVendedor.find()
        return habitaciones
    }

    async buscarVendedorPorId(id) {
        let habitacion = await modeloVendedor.findById(id)
        return habitacion
    }

    async agregarVendedorEnBD(datos) {
        let datosValidados = new modeloVendedor(datos)
        return await datosValidados.save()
    }

    async editarVendedor(id, datos) {

        return await modeloVendedor.findByIdAndUpdate(id, datos)
    }

}