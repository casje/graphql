const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// ----------------------------------------------------------------------
// ------    Testar a conexão   
// ----------------------------------------------------------------------
//
// knex('users').insert({
//     nome: 'Juliana Avila',
//     email: 'juliana@ybol.com',
//     senha: '123'
// }).then(data => console.log(data));
//
// knex('users').select('*').then(resultado => console.log(resultado))
// knex('users').first().then(resultado => console.log(resultado))
// knex('users').where({id: 4}).then(resultado => console.log(resultado))
// ----------------------------------------------------------------------