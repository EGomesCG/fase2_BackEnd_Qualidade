const request = require('supertest');
const app = require('../index');
const { expect } = require('chai');

describe('POST /posts CRUD API', () => {
  it('deve retornar status 200 e um array vazio inicialmente', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).to.equal(200);
    expect(res.body.success).to.be.true;
    expect(res.body.data).to.be.an('array');
  });

  it('deve criar um novo post', async () => {
    const res = await request(app).post('/posts').send({
      title: 'Novo Post',
      content: 'Conteúdo do post',
      author: 'Admin'
    });
    expect(res.status).to.equal(201);
    expect(res.body.success).to.be.true;
    expect(res.body.data).to.have.property('_id');
  });
});
