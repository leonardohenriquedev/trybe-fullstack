const { splitSentence } = require('../src/challenges');

describe('3 - Crie uma função que divida a frase', () => {
  it('Retorne o valor [\'go\', \'Trybe\'] se a função receber a string \'go Trybe\'', () => {
    expect(splitSentence('go Trybe')).toEqual(['go', 'Trybe']);
  });

  it('Retorne o valor [\'vamo\', \'que\', \'vamo\']. se a função receber a string \'vamo que vamo\'', () => {
    expect(splitSentence('vamo que vamo')).toEqual(['vamo', 'que', 'vamo']);
  });

  it('Retorne o valor [\'foguete\'] se a função receber a string \'foguete\'', () => {
    expect(splitSentence('foguete')).toEqual(['foguete']);
  });
});
