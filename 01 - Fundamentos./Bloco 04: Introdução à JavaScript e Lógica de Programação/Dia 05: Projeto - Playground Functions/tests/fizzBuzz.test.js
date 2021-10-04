const { fizzBuzz } = require('../src/challenges');

describe('8 - Crie uma função FizzBuzz', () => {
  it('Retorne as strings [\'bug!\', \'fizzBuzz\', \'bug!\', \'fizz\', \'fizzBuzz\'] quando é passado os parâmetros [2, 15, 7, 9, 45] para função fizzBuzz', () => {
    expect(fizzBuzz([2, 15, 7, 9, 45])).toEqual(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']);
  });

  it('Retorne as strings [\'bug!\', \'fizz\'] quando é passado os parâmetros [7, 9] para função fizzBuzz', () => {
    expect(fizzBuzz([7, 9])).toEqual(['bug!', 'fizz']);
  });
  
  it('Retorne as strings [\'fizz\', \'buzz\'] quando é passado os parâmetros [9, 25] para função fizzBuzz', () => {
    expect(fizzBuzz([9, 25])).toEqual(['fizz', 'buzz']);
  });
});
