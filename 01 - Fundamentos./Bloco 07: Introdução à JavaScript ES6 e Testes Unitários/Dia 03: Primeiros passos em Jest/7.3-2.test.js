const { encode, decode, techList, hydrate } = require('./7.3-2');

describe('Testa as funções encode e decode', () => {

  it('Verifica a existencia das funções encode e decode', () => {

    expect(typeof(encode)).toEqual('function');
    expect(typeof(decode)).toEqual('function');
  })

  it('Verifica se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {

    expect(encode('aeiou')).toEqual('12345');
  })

  it('Verifica se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {

    expect(decode('12345')).toEqual('aeiou');
  })

  it('Verifica se as consoantes b, c, d, f, g são codificadas ou nao', () => {

    expect(encode('bcdfg')).toEqual('bcdfg');
  })

  it('Verifica se os numeros 6, 7, 8, 9, são decodificados ou nao', () => {

    expect(decode('6789')).toEqual('6789');
  })

  it('Verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {

    let input = 'teste de tamanho';

    expect(encode(input).length).toEqual(input.length);
  })








})


describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([{
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
