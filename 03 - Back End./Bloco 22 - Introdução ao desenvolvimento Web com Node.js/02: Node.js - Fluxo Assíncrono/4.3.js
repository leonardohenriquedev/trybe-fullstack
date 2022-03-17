const fs = require('fs').promises;

const alteraArquivo = async () => {
  const arquivo = await fs
    .readFile('./simpsons.json', 'utf8')
    .then((data) => data)
    .catch((err) => err);

  const personagens = JSON.parse(arquivo);

  const novos = personagens.filter((curr) => curr.id != 10 && curr.id != 6);

  novoArquivo = JSON.stringify(novos);

  fs.writeFile('./simpsons.json', novoArquivo);
};
alteraArquivo();
