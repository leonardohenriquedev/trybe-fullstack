const challenges = require('../src/challenges2');

describe('12 - Crie uma função de Condição de existência de um triângulo', () => {
  it('Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois', () => {
    expect(challenges.triangleCheck(16, 9, 2)).toBe(false);
    expect(challenges.triangleCheck(10, 3, 4)).toBe(false);
    expect(challenges.triangleCheck(6, 2, 2)).toBe(false);
  });

  it('Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas', () => {
    expect(challenges.triangleCheck(10, 13, 2)).toBe(false);
    expect(challenges.triangleCheck(12, 17, 4)).toBe(false);
    expect(challenges.triangleCheck(5, 10, 3)).toBe(false);
  });

  it('Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas', () => {
    expect(challenges.triangleCheck(10, 14, 8)).toBe(true);
    expect(challenges.triangleCheck(2, 3, 4)).toBe(true);
    expect(challenges.triangleCheck(16, 20, 30)).toBe(true);
  });
});
