const { calcArea } = require('../src/challenges');

describe('2 - Crie uma função que calcule a área do triângulo', () => {
  it('Retorne o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50', () => {
    expect(calcArea(10, 50)).toBe(250);
  });

  it('Retorne o valor 5 quando a funcão calcArea é chamada com o parâmetro base com o valor 5 e o parâmetro height com o valor 2 espera-se como resultado 5', () => {
    expect(calcArea(5, 2)).toBe(5);
  });
  
  it('Retorne o valor 25.5 quando a funcão calcArea é chamada com o parâmetro base com o valor 51 e o parâmetro height com o valor 1 espera-se como resultado 25.5', () => {
    expect(calcArea(51, 1)).toBe(25.5);
  });
});
