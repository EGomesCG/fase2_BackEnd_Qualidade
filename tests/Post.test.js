const request = require('supertest');
const app = require('../index'); // Agora importa corretamente
const { expect } = require('chai');

describe('GET /posts', function () {
    this.timeout(5000); // ⬅️ Define timeout maior para evitar falhas por lentidão

    it('deve retornar todos os posts', async function () {
        const res = await request(app).get('/posts');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.success).to.be.true;
        expect(res.body.data).to.be.an('array');
    });
});
