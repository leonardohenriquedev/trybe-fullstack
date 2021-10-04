const searchEmployee = require('./bonus');

describe('Testa a função searchEmployee', () => {

  it('Verifica se a função existe', () => {
    expect(typeof(searchEmployee)).toEqual('function')
  })

  it('Verifica se passado os parametros 8579-6 e firstName o retorno é Ana', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual(`ID: 8579-6 
firstName: Ana`);
  })

  it('Verifica se retorna id nao identificada quando um id inexistente é passado como parametro', () => {
    expect(searchEmployee('8579-9', 'firstName')).toEqual(`ID não identificada`);
  })

  it('Verifica se retorna Informação indisponível quando uma informação inexistente é passada como parametro', () => {
    expect(searchEmployee('8579-9', 'nickName')).toEqual(`Informação indisponível`);
  })

})
