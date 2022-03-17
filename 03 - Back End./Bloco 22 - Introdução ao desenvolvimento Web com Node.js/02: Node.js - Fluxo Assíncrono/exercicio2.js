const fs = require('fs').promises;

async function format() {
  const result = await fs
    .readFile('./simpsons.json', 'utf8')
    .then((data) => data)
    .catch((err) => err);

  const personagens = JSON.parse(result);

  for (let index = 0; index < personagens.length; index++) {
    console.log(`${personagens[index].id} - ${personagens[index].name}`);
  }

  return personagens;
}

const findById = async (id) => {
  const personagens = await format();
  return new Promise((resolve, reject) => {
    const personagem = personagens.find((curr) => curr.id == id);
    if (personagem) {
      resolve(personagem);
    }
    reject(new Error('id nao encontrado'));
  });
};

findById(3)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
