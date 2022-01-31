const app = require('./server');
const swaggerTools = require('swagger-tools');

const options = {controllers: './controllers'}
let swaggerDoc = require('./swagger.json');
const serverPort = 3000;

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    app.use(middleware.swaggerRouter(options));
    app.use(middleware.swaggerUi());
    app.listen(serverPort, () => {
        console.log(`Server is listening on port %d (http://localhost:%d)`, serverPort, serverPort);
        console.log(`Swagger-ui is available on http://localhost:%d/docs`, serverPort);
    });
});

// app.listen(3000, () => {
//     console.log('Success running 3000');
// });
module.exports = app;