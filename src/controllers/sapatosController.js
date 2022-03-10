const fs = require('fs');
const { uuid } = require('uuidv4');

const sapatosController = {
  buscarPaginaCadastro: (request, response) => {
    response.render('cadastroSapato', {
      title: 'Express',
    });
  },
}

// usuario chama uma url com metodo
// express ouve essa url(router)
// expresss direciona para controller

module.exports = sapatosController