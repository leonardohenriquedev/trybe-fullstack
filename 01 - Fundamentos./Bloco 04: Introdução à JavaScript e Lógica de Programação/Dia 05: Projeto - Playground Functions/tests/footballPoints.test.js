const { footballPoints } = require('../src/challenges');

describe('5 - Crie uma função que calcule a quantidade de pontos no futebol', () => {
  it('Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates', () => {
    expect(footballPoints(14, 8)).toBe(50);
  });

  it('Retorne 5 pontos quando o time tenha 1 vitória e 2 empates', () => {
    expect(footballPoints(1, 2)).toBe(5);
  });
  
  it('Retorne 0 pontos quando  o time tenha 0 vitórias e 0 empates', () => {
    expect(footballPoints(0, 0)).toBe(0);
  });
});
