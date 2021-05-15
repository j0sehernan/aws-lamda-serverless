/* const expect = require('chai').expect;
const request = require('supertest');

describe('API — teamsByGame', () => {
    const server = request('http://localhost:3000');

    it('GET /games/{gameId}/teams', (done) => {
        let authors = [
            {
                id: 1,
                name: "Juan",
                lastName: "Perez",
                email: "juan.perez@gmail.com",
                dateOfBirth: "2000-02-16",
                createdAt: "2000-02-16",
                updatedAt: "2000-02-16"
            },
            {
                id: 2,
                name: "Daniel",
                lastName: "Guevara",
                email: "daniel.guevara@gmail.com",
                dateOfBirth: "1992-07-04",
                createdAt: "1992-07-04",
                updatedAt: "1992-07-04"
            },
            {
                id: 3,
                name: "Cesar",
                lastName: "Fuentes",
                email: "cesar.fuentes@gmail.com",
                dateOfBirth: "1991-11-15",
                createdAt: "1991-11-15",
                updatedAt: "1991-11-15"
            }
        ];

        server.get('/authors')
            .expect(200)
            .end((error, result) => {
                if (error) return done(error);
                expect(result.body).to.deep.eq(authors);
                return done();
            });
    });
}); */