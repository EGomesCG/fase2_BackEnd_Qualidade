const request = require('supertest');
const app = require('../../index');
const { expect } = require('chai');

describe('GET /posts', () = {
    it('should return all post', async () => {
        const res = await request(app).get('/posts')
        expect(res.statusCode).toBe(200)
    });
});