const { before } = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const numeros = require('./Numeros');
const escrever = require('./Escrever');

describe('Testa função de numeros', () => {
  it('Testa retorno de um numero maior que 0', () => {
    const result = numeros(5);

    expect(result).to.be.equal('positivo');
  });

  it('Testa retorno de um numero menor que 0', () => {
    const result = numeros(-5);

    expect(result).to.be.equal('negativo');
  });

  it('Testa retorno de um numero igual a 0', () => {
    const result = numeros(0);

    expect(result).to.be.equal('neutro');
  });

  it('Testa retorno quando é passado um valor diferente de um numero', () => {
    const result = numeros('a');

    expect(result).to.be.equal('o valor deve ser um número');
  });
});

describe('Testa função de escrever em arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('ok');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('Testa a função passando um nome de arquivo e um texto', () => {
    const result = escrever('arquivo.txt', 'Texto escrito');

    expect(result).to.be.a('string');
    expect(result).to.be.equals('ok');
  });
});
