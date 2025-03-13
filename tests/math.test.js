const { expect } = require('chai');
const { add } = require('../math'); // Ajuste o caminho conforme sua estrutura

describe('Funções Matemáticas', () => {
  it('deve somar dois números corretamente', () => {
    expect(add(2, 3)).to.equal(5, 'A soma de 2 e 3 deve ser 5');
  });

  it('deve retornar um número quando somar zero', () => {
    expect(add(0, 5)).to.equal(5, 'A soma de 0 e 5 deve ser 5');
  });

  it('deve somar números negativos corretamente', () => {
    expect(add(-2, -3)).to.equal(-5, 'A soma de -2 e -3 deve ser -5');
  });

  it('deve somar números decimais corretamente', () => {
    expect(add(2.5, 3.5)).to.equal(6, 'A soma de 2.5 e 3.5 deve ser 6');
  });

  it('deve retornar NaN quando somar um número e uma string', () => {
    expect(add(2, '3')).to.be.NaN;
  });
});

