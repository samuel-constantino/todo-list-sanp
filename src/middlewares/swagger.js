const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');

const swaggerDocument = YAML.load('./src/helpers/swagger.yaml');

const swagger = {
    serve: swaggerUI.serve,
    setup: swaggerUI.setup(swaggerDocument),
};

module.exports = { swagger };