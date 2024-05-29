const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Delta Virtual Airlines Online Pilots API',
    Author: 'Joe Burner',
    description: 'Delta Virtual Airlines Pilots Project BYU-I'
  },
  host: 'dva-project.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);