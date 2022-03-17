const fs = require('fs');

const escrever = (arquivo, texto) => {
  try {
    fs.writeFileSync(arquivo, texto);
    return 'ok';
  } catch (error) {
    error.message;
  }
};

module.exports = escrever;
