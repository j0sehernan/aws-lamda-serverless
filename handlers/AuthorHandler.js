const authorService = require('../services/AuthorService')

module.exports.list = async () => {
    return authorService.list();
};

module.exports.get = async (event) => {
    const id = event.pathParameters.id;

    return authorService.get(id);
};

module.exports.create = async (event) => {
    const objJson = JSON.parse(event.body);

    return authorService.create(objJson);
};

module.exports.update = async (event) => {
    const id = event.pathParameters.id;
    const objJson = JSON.parse(event.body);

    return authorService.update(id, objJson);
};

module.exports.delete = async (event) => {
    const id = event.pathParameters.id;

    return authorService.delete(id);
};