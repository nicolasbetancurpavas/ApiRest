import mongoose from 'mongoose';

export async function conectarConMongo() {

    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("exito en la conexion a mongo")
    }
    catch (error) {
        console.log(error)
    }
}