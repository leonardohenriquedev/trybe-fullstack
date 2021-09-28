const { sum, myRemove } = require('./7.3');

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
