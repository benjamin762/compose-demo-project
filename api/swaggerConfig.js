const swaggerJSDoc = require('swagger-jsdoc');
const path = require ('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API-dokumentation',
            version: '1.0.0',
            description: 'DevOps demo API för hantering av status och data',
        },
        servers: [
            { url: '/api' }, // relativ bas funkar både lokalt och i prod bakom samma host
            { url: 'http://localhost:3000/api' }, // lokal
            { url: 'https://aws-todo/api'} // 
        ]
    },
    apis: [path.resolve(__dirname, 'routes.js')],
}

const specs = swaggerJSDoc(options);
module.exports = specs;