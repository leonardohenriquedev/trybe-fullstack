const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (req, res) => {
  const simp = await fs
    .readFile('./simpsons.json')
    .then((data) => JSON.parse(data));

  res.json(simp);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;

  const simpsons = await fs
    .readFile('./simpsons.json')
    .then((data) => JSON.parse(data));

  const simpson = simpsons.find((curr) => curr.id == id);

  if (!simpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }

  res.status(200).json(simpson);
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await fs
    .readFile('./simpsons.json')
    .then((data) => JSON.parse(data));

  if (simpsons.some((curr) => curr.id == id)) {
    return res.status(409).json({ message: 'id already exists' });
  } else {
    simpsons.push({ id, name });
    fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
  }

  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000');
});
