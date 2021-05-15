const { expect } = require('chai');
const sinon = require('sinon');
const PublicationService = require('../../services/PublicationService')
const db = require('../../models')

describe('PublicationService Test', () => {
    let publications = [
        {
            id: 2,
            AuthorId: 1,
            title: "La Biblia",
            body: "La historia de Jesucristo...",
            dateTime: "1980-02-12T18:08:00.000Z",
            createdAt: "1980-02-12T00:00:00.000Z",
            updatedAt: "1980-02-12T00:00:00.000Z",
            Author: {
                id: 1,
                name: "Juan",
                lastName: "Perez",
                email: "juan.perez@gmail.com",
                dateOfBirth: "2000-02-16",
                createdAt: "2000-02-16T00:00:00.000Z",
                updatedAt: "2000-02-16T00:00:00.000Z"
            }
        },
        {
            id: 3,
            AuthorId: 2,
            title: "Harry Potter",
            body: "Los hechiceros...",
            dateTime: "2001-07-29T02:05:00.000Z",
            createdAt: "2001-07-29T00:00:00.000Z",
            updatedAt: "2001-07-29T00:00:00.000Z",
            Author: {
                id: 2,
                name: "Daniel",
                lastName: "Guevara",
                email: "daniel.guevara@gmail.com",
                dateOfBirth: "1992-07-04",
                createdAt: "1992-07-04T00:00:00.000Z",
                updatedAt: "1992-07-04T00:00:00.000Z"
            }
        },
        {
            id: 6,
            AuthorId: 3,
            title: "The Lion King",
            body: "Lion...",
            dateTime: "1999-09-10T05:20:00.000Z",
            createdAt: "2021-05-15T04:43:13.237Z",
            updatedAt: "2021-05-15T04:44:04.030Z",
            Author: {
                id: 3,
                name: "Cesar",
                lastName: "Fuentes",
                email: "cesar.fuentes@gmail.com",
                dateOfBirth: "1991-11-15",
                createdAt: "1991-11-15T00:00:00.000Z",
                updatedAt: "1991-11-15T00:00:00.000Z"
            }
        }
    ];

    let listPublicationStub;
    let getPublicationStub;
    let createPublicationStub;
    let updatePublicationStub;
    let deletePublicationStub;

    beforeEach(() => {
        listPublicationStub = sinon.stub(db.Publication, 'findAll').returns(publications);
        getPublicationStub = sinon.stub(db.Publication, 'findByPk').returns(publications[2]);
        createPublicationStub = sinon.stub(db.Publication, 'create').returns(publications[0]);
        updatePublicationStub = sinon.stub(db.Publication, 'update');
        deletePublicationStub = sinon.stub(db.Publication, 'destroy');
    });

    afterEach(() => {
        listPublicationStub.restore();
        getPublicationStub.restore();
        createPublicationStub.restore();
        updatePublicationStub.restore();
        deletePublicationStub.restore();
    });

    it('Publication List', async () => {
        const response = await PublicationService.list();

        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body).length).to.equal(3);
    });

    it('Publication Get', async () => {
        const response = await PublicationService.get(6);

        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body).id).to.equal(6);
        expect(JSON.parse(response.body).title).to.equal("The Lion King");
    });

    it('Publication Create', async () => {
        const objJson = {
            AuthorId: 2,
            title: "Harry Potter",
            body: "Los hechiceros...",
            dateTime: "2001-07-29 05:05",
        }

        const response = await PublicationService.create(objJson);

        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body).id).to.equal(2);
    });

    it('Publication Update', async () => {
        const objJson = {
            AuthorId: 2,
            title: "Harry Potter",
            body: "Los hechiceros...",
            dateTime: "2001-07-29 05:05",
        }

        const response = await PublicationService.update(2, objJson);

        expect(response.statusCode).to.equal(200);
    });

    it('Publication Delete', async () => {
        const response = await PublicationService.delete(2);

        expect(response.statusCode).to.equal(200);
    });
});