const { compareTrue } = require('../src/challenges');

describe('1 - Crie uma função usando o operador &&', () => {
  it('Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true', () => {
    expect(compareTrue(false, true)).toBe(false);
    expect(compareTrue(true, false)).toBe(false);
  });

  it('Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false', () => {
    expect(compareTrue(false, false)).toBe(false);
  });
  
  it('Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true', () => {
    expect(compareTrue(true, true)).toBe(true);
  });
});
