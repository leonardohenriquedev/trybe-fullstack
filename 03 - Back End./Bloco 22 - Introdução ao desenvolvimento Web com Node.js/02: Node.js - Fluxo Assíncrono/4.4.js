const fs = require('fs').promises;

const create = async () => {
  const text = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((result) => result)
    .catch((err) => err);

  const obj = JSON.parse(text);

  const filtered = obj.filter((curr) => curr.id >= 1 && curr.id <= 4);

  family = JSON.stringify(filtered);

  fs.writeFile('simpsonFamily.json', family);
};

create();
