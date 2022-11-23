//RECIBIR PETICIONES, LOGICA DE NEGOCIO Y ENVIO DE RESPUESTAS
import { ServicioVendedor } from '../Services/ServicioVendedor.js'
//los puntos no son iguales que las comas ej : "." ","

export class ControladorVendedor {

    constructor() { }

    async buscarVendedores(request, response) {

        let objetoServicioVendedor = new ServicioVendedor()

        try {
            response.status(200).json({
                "mensaje": "Exito en la consulta",
                "datos": await objetoServicioVendedor.buscarVendedores(),
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta" + error,
                "datos": null,
            })
        }
    }

    async buscarVendedorPorId(request, response) {

        let idVendedor = request.params.idVendedor //Recibo id de la peticion

        let objetoServicioVendedor = new ServicioVendedor()

        try {
            response.status(200).json({
                "mensaje": "Exito en la consulta " + idVendedor,
                "datos": await objetoServicioVendedor.buscarVendedorPorId(idHabitacion)
            })

        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta" + error,
                "datos": null,
            })
        }
    }

    async registrarVendedor(request, response) {
        //response.send("Estoy agregando una habitacion desde el controlador")

        let datosVendedor = request.body //obtengo datos del body
        let objetoServicioVendedor = new ServicioVendedor()

        try {

            await objetoServicioVendedor.agregarVendedorEnBD(datosVendedor)

            response.status(200).json({
                "mensaje": "Exito agregando una habitacion",
                "datos": datosVendedor
            })

        }
        catch (error) {
            response.status(400).json({
                "mensaje": "Error agregando una habitacion" + error,
                "datos": null
            })
        }
    }

    async editarVendedor(request, response) {
        //response.send("Estoy editando una habitacion desde el controlador")

        let id = request.params.id
        let datosHabitacion = request.body
        let objetoServicioVendedor = new ServicioVendedor()

        try {
            await objetoServicioVendedor.editarVendedor(id, datosHabitacion)
            response.status(200).json({
                "mensaje": "Exito editando una habitacion " + id,
                "datos": null,
            })

        } catch (error) {
            response.status(400).json({
                "mensaje": "Error en la consulta" + error,
                "datos": null,
            })
        }
    }
}