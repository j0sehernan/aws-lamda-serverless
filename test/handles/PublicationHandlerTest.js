const { expect } = require('chai');
const request = require('supertest');
describe('Integration Test API - Publications', () => {
    const server = request('https://e4am4y33bd.execute-api.us-west-2.amazonaws.com');
    var id = 0;
    const obj = {
        title: "La Serpiente de Oro",
        body: "El río Marañón...",
        dateTime: "1999-09-15 12:01",
        AuthorId: 1
    }

    it('POST /dev/publications', function (done) {
        server.post('/dev/publications')
            .send(obj)
            .expect(200)
            .then(response => {
                id = response.body.id;
                done();
            })
            .catch(err => done(err))
    });

    it('GET /dev/publications', function (done) {
        server.get('/dev/publications')
            .expect(200)
            .then(response => {
                const found = response.body.find(element => element.id == id);
                expect(found.id).to.equal(id);
                expect(found.title).to.equal(obj.title);
                done();
            })
            .catch(err => done(err))
    });

    it('GET /dev/publications/{id}', function (done) {
        server.get('/dev/publications/' + id)
            .expect(200)
            .then(response => {
                expect(response.body.id).to.equal(id);
                expect(response.body.title).to.equal(obj.title);
                done();
            })
            .catch(err => done(err))
    });

    it('PUT /dev/publications/{id}', function (done) {
        server.put('/dev/publications/' + id)
            .send(obj)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it('DELETE /dev/publications/{id}', function (done) {
        server.delete('/dev/publications/' + id)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});