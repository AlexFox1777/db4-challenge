const express = require('express');
const recipesRouter = require('../recipes/recipes');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) =>{
    res.send('Recipes :) ');
});

module.exports = server;