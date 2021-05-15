const db = require('../models')

module.exports.list = async () => {
    try {
        const authorList = await db.Author.findAll();

        return {
            statusCode: 200,
            body: JSON.stringify(authorList)
        };
    } catch (error) {
        console.error(error);
    }
};

module.exports.get = async (id) => {
    try {
        const author = await db.Author.findByPk(id);

        return {
            statusCode: 200,
            body: JSON.stringify(author)
        };
    } catch (error) {
        console.error(error);
    }
};

module.exports.create = async (objJson) => {
    try {
        const author = await db.Author.create(objJson);

        return {
            statusCode: 200,
            body: JSON.stringify(author)
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports.update = async (id, objJson) => {
    try {
        await db.Author.update({
            name: objJson.name,
            lastName: objJson.lastName,
            email: objJson.email,
            dateOfBirth: objJson.dateOfBirth
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
        await db.Author.destroy({
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