const { expect } = require('chai');
const sinon = require('sinon');
const AuthorService = require('../../services/AuthorService')
const db = require('../../models')

describe('AuthorService Test', () => {
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

    let listAuthorStub;
    let getAuthorStub;
    let createAuthorStub;
    let updateAuthorStub;
    let deleteAuthorStub;

    beforeEach(() => {
        listAuthorStub = sinon.stub(db.Author, 'findAll').returns(authors);
        getAuthorStub = sinon.stub(db.Author, 'findByPk').returns(authors[0]);
        createAuthorStub = sinon.stub(db.Author, 'create').returns(authors[0]);
        updateAuthorStub = sinon.stub(db.Author, 'update');
        deleteAuthorStub = sinon.stub(db.Author, 'destroy');
    });

    afterEach(() => {
        listAuthorStub.restore();
        getAuthorStub.restore();
        createAuthorStub.restore();
        updateAuthorStub.restore();
        deleteAuthorStub.restore();
    });

    it('Author List', async () => {
        const response = await AuthorService.list();

        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body).length).to.equal(3);
    });

    it('Author Get', async () => {
        const response = await AuthorService.get(1);

        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body).id).to.equal(1);
        expect(JSON.parse(response.body).name).to.equal("Juan");
    });

    it('Author Create', async () => {
        const objJson = {
            name: "Diego",
            lastName: "Guevara",
            email: "juan.perez@gmail.com",
            dateOfBirth: "2000-02-20",
        }

        const response = await AuthorService.create(objJson);

        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body).id).to.equal(1);
    });

    it('Author Update', async () => {
        const objJson = {
            name: "Daniel",
            lastName: "Guevara",
            email: "daniel.guevara@gmail.com",
            dateOfBirth: "1992-07-04",
        }

        const response = await AuthorService.update(2, objJson);

        expect(response.statusCode).to.equal(200);
    });

    it('Author Delete', async () => {
        const response = await AuthorService.delete(1);

        expect(response.statusCode).to.equal(200);
    });
});