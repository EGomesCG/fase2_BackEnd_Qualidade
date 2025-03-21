const { expect } = require('chai');
const { add } = require('../math');

describe('Funções Matemáticas', () => {
  it('deve somar dois números corretamente', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('deve retornar NaN quando somar um número e uma string', () => {
    expect(() => add(2, '3')).to.throw(TypeError);
  });
});
