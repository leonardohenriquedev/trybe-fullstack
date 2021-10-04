const challenges = require('../src/challenges');

describe('9 - Crie uma função que Codifique e Decodifique', () => {
  it('Retorne uma string codificada quando a função encode for utilizada', () => {
    expect(challenges.encode('hello')).toBe('h2ll4');
    expect(challenges.encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?');
    expect(challenges.encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.');
    expect(challenges.encode('go Trybe!')).toBe('g4 Tryb2!');
  });

  it('Retorne uma string decodificada quando a função decode for utilizada', () => {
    expect(challenges.decode('h2ll4')).toBe('hello');
    expect(challenges.decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?');
    expect(challenges.decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.');
    expect(challenges.decode('g4 Tryb2!')).toBe('go Trybe!');
  });
});
