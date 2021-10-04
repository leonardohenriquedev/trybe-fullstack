const { it, expect } = require('@jest/globals');
const { sum, myRemove, myFizzBuzz } = require('./7.3');

describe('Testa a função sum', () => {

  it('Verifica se o retorno de 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('Verifica se o retorno de 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  it('Verifica se a função lança um erro quando recebe uma string como parametro', () => {
    expect(() => sum(4, '5')).toThrowError(Error);
  })

  it('Verifica se a função lança o erro <must be numbers> quando recebe uma string como parametro', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })

})

describe('Testa a função myRemove', () => {
  const arr = [1, 2, 3, 4];

  it('Verifica se remove o numero 3 do array [1, 2, 3, 4]', () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  })

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  })
})

describe('Testa a função myFizzBuzz', () => {

  it('Verifica se a função retorna fizzbuzz quando o valor 15 é passado como parametro', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  })

  it('Verifica se a função retorna fizz quando o valor 3 é passado como parametro', () => {
    expect(myFizzBuzz(3)).toEqual('fizz')
  })

  it('Verifica se a função retorna buzz quando o valor 5 é passado como parametro', () => {
    expect(myFizzBuzz(5)).toEqual('buzz')
  })

  it('Verifica se a função retorna o mesmo numero quando o valor passado por parametro nao é divisivel por 3 ou 5.', () => {
    let num = 8;
    expect(myFizzBuzz(num)).toEqual(num)
  })

  it('Verifica se a função retorna false quando o parametro passado nao é um numero', () => {
    expect(myFizzBuzz('oito')).toEqual(false)
  })

})
