const challenges = require('../src/challenges2');

describe('11 - Crie uma função de Número de telefone', () => {
  it('Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11', () => {
    expect(challenges.generatePhoneNumber([0, 1, 6])).toBe('Array com tamanho incorreto.');
    expect(challenges.generatePhoneNumber([])).toBe('Array com tamanho incorreto.');
    expect(challenges.generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10])).toBe('Array com tamanho incorreto.');
  });

  it('Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números da array seja menor que 0', () => {
    expect(challenges.generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([3, -2, 1, 9, -5, 0, 7, 4, 0, 6, 1])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([-1, 2, 4, -4, 5, 6, 9, -8, 7, 3, 3])).toBe('não é possível gerar um número de telefone com esses valores');
  });

  it('Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array seja maior que 9', () => {
    expect(challenges.generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([1, 2, 18, 0, 5, 3, 17, 8, 9, 1, 8])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([1, 2, 12, 4, 15, 5, 2, 8, 9, 10, 11])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([0, 2, 3, 14, 5, 7, 71, 1, 9, 0, 7])).toBe('não é possível gerar um número de telefone com esses valores');
  });

  it('Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array se repeti 3 vezes ou mais', () => {
    expect(challenges.generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1])).toBe('não é possível gerar um número de telefone com esses valores');
    expect(challenges.generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7])).toBe('não é possível gerar um número de telefone com esses valores');
  });

  it('Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números da array estejam de acordo com as restrições', () => {
    expect(challenges.generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe('(12) 34567-8901');
    expect(challenges.generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0])).toBe('(52) 81537-2890');
    expect(challenges.generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1])).toBe('(02) 43556-8921');
    expect(challenges.generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7])).toBe('(02) 34587-9107');
  });
});
