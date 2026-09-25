import { MongoClient } from 'mongodb'

const cadenaConexion = "mongodb://root:12345678@localhost:27017/"

const cliente = new MongoClient(cadenaConexion)

export async function conectarMongo() {
    await cliente.connect()
    console.log("Conectado a MongoDB")

    return cliente.db("pizzas")
}

conectarMongo()