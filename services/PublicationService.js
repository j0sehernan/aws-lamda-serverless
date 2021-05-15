const db = require('../models')

module.exports.list = async () => {
    try {
        const publicationList = await db.Publication.findAll({
            include: db.Author
        });

        return {
            statusCode: 200,
            body: JSON.stringify(publicationList)
        };
    } catch (error) {
        console.error(error);
    }
};

module.exports.get = async (id) => {
    try {
        const publication = await db.Publication.findByPk(id);

        return {
            statusCode: 200,
            body: JSON.stringify(publication)
        };
    } catch (error) {
        console.error(error);
    }
};

module.exports.create = async (objJson) => {
    try {
        const publication = await db.Publication.create(objJson);

        return {
            statusCode: 200,
            body: JSON.stringify(publication)
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports.update = async (id, objJson) => {
    try {
        await db.Publication.update({
            title: objJson.title,
            body: objJson.body,
            dateTime: objJson.dateTime,
            AuthorId: objJson.AuthorId
        }, {
            where: {
                id: id
            }
        });

        return {
            statusCode: 200
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports.delete = async (id) => {
    try {
        await db.Publication.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        console.error(error);
    }

    return {
        statusCode: 200
    };
};