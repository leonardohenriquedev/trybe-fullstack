const service = require('./service');

describe('Testa a função randomNumberGenerator', () => {
  it('Testa se retorna um numero', () => {
    service.randomNumberGenerator = jest.fn().mockReturnValue(10);

    const element = service.randomNumberGenerator();
    expect(typeof element).toBe('number');
  });

  it('Testa se retorna o numero 10', () => {
    service.randomNumberGenerator = jest.fn().mockReturnValue(10);

    const element = service.randomNumberGenerator();
    expect(element).toEqual(10);
  });

  it('Testa se a função é chamada apenas 1 vez', () => {
    service.randomNumberGenerator = jest.fn().mockReturnValue(10);

    service.randomNumberGenerator();
    expect(service.randomNumberGenerator).toBeCalledTimes(1);
  });
});

describe('Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez', () => {
  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    service.randomNumberGenerator = jest
      .fn()
      .mockImplementationOnce((a, b) => a / b);
    const result = service.randomNumberGenerator(10, 2);
    expect(service.randomNumberGenerator).toBeCalledTimes(1);
    expect(result).toBe(5);
    expect(service.randomNumberGenerator()).toBe(undefined);
  });
  it('Verifique se a aplicação da nova implementação acontece apenas uma vez', () => {
    service.randomNumberGenerator = jest
      .fn()
      .mockImplementationOnce((a, b) => a / b);
    const result = service.randomNumberGenerator(10, 2);
    expect(service.randomNumberGenerator).toBeCalledTimes(1);
    expect(result).toBe(5);
    expect(service.randomNumberGenerator()).toBe(undefined);
  });
});

describe('Use a mesma função do primeiro exercício', () => {
  it('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros, Retorne a multiplicação dos parâmetros.', () => {
    service.randomNumberGenerator = jest
      .fn()
      .mockImplementation((a, b, c) => a * b * c);
    expect(service.randomNumberGenerator(10, 2, 5)).toBe(100);
    service.randomNumberGenerator.mockReset();
    service.randomNumberGenerator = jest.fn().mockImplementation((a) => a * 2);
    expect(service.randomNumberGenerator(10)).toBe(20);
  });
});

describe('Testa mock de implementação', () => {
  it('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa e depois restaure a implementação', () => {
    const mocktoUpperCase = jest
      .spyOn(service, 'toUpperCase')
      .mockImplementation((a) => a.toLowerCase());
      
    service.toUpperCase('LEONARDO');
    expect(mocktoUpperCase).toBeCalledTimes(1);
    // service.toUpperCase.mockRestore();
    // expect(service.toUpperCase('leonardo')).toEqual('LEONARDO');
  });

  it('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
    service.firstLetter = jest.fn().mockImplementation((a) => a[a.length - 1]);
    expect(service.firstLetter('LEONARDO')).toEqual('O');
  });

  it('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
    service.concat = jest.fn().mockImplementation((a, b, c) => a + b + c);
    expect(service.concat('LEONARDO', 'HENRIQUE', 'MACHADO')).toEqual(
      'LEONARDOHENRIQUEMACHADO'
    );
  });
});
