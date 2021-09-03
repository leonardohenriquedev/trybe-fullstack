const { catAndMouse } = require('../src/challenges');

describe('7 - Crie uma função de Caça ao rato', () => {
  it('Retorne a string \'cat2\' caso a função catAndMouse receba o parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato', () => {
    expect(catAndMouse(0, 3, 2)).toBe('cat2');
  });

  it('Retorne a string \'cat1\' caso a função catAndMouse receba o parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato', () => {
    expect(catAndMouse(10, 4, 22)).toBe('cat1');
  });
  
  it('Retorne a string \'os gatos trombam e o rato foge\' caso a função catAndMouse receba o parâmetros onde gatos estejam na mesma distância do rato', () => {
    expect(catAndMouse(1, 0, 2)).toBe('os gatos trombam e o rato foge');
  });
});
