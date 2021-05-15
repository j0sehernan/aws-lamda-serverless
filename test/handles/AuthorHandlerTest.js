const { expect } = require('chai');
const request = require('supertest');
describe('Integration Test API - Authors', () => {
    const server = request('https://e4am4y33bd.execute-api.us-west-2.amazonaws.com');
    var id = 0;
    const obj = {
        name: "Gael",
        lastName: "Quispe",
        email: "gael@gmail.com",
        dateOfBirth: "2020-02-16"
    }

    it('POST /dev/authors', function (done) {
        server.post('/dev/authors')
            .send(obj)
            .expect(200)
            .then(response => {
                id = response.body.id;
                done();
            })
            .catch(err => done(err))
    });

    it('GET /dev/authors', function (done) {
        server.get('/dev/authors')
            .expect(200)
            .then(response => {
                const found = response.body.find(element => element.id == id);
                expect(found.id).to.equal(id);
                expect(found.name).to.equal(obj.name);
                done();
            })
            .catch(err => done(err))
    });

    it('GET /dev/authors/{id}', function (done) {
        server.get('/dev/authors/' + id)
            .expect(200)
            .then(response => {
                expect(response.body.id).to.equal(id);
                expect(response.body.name).to.equal(obj.name);
                done();
            })
            .catch(err => done(err))
    });

    it('PUT /dev/authors/{id}', function (done) {
        server.put('/dev/authors/' + id)
            .send(obj)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

    it('DELETE /dev/authors/{id}', function (done) {
        server.delete('/dev/authors/' + id)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});