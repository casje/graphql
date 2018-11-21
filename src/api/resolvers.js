const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, parametros) {
            return await db('users').where({ id: parametros.id }).first()
        },
        async getUsers() {
            return await db('users')
        }
    },
    Mutation: {
        async createUser (_, { input }) {
            const result = await db('users').insert({
                nome:  input.nome,
                email: input.email,
                senha: input.senha
            })

            const id = result[0]

            return await db('users').where({ id: id}).first()
        }
    }
}