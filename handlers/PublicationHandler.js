const publicationService = require('../services/PublicationService')

module.exports.list = async () => {
    return publicationService.list();
};

module.exports.get = async (event) => {
    const id = event.pathParameters.id;

    return publicationService.get(id);
};

module.exports.create = async (event) => {
    const objJson = JSON.parse(event.body);

    return publicationService.create(objJson);
};

module.exports.update = async (event) => {
    const id = event.pathParameters.id;
    const objJson = JSON.parse(event.body);

    return publicationService.update(id, objJson);
};

module.exports.delete = async (event) => {
    const id = event.pathParameters.id;

    return publicationService.delete(id);
};