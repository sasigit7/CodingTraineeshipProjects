const express = require('express');

const {getElementById, getIndexById, updateElement, seedElements, createElement} = require('./utils');

let animals = [];
seedElements(animals, 'animals');

animalsRouter = express.Router();

// Get all animals
animalsRouter.get('/', (req, res, next) => {
    res.send(animals);
});

// Get a single animal
animalsRouter.get('/:id', (req, res, next) => {
    const animal = getElementById(req.params.id, animals);
    if (animal) {
        res.send(animal);
    } else {
        res
            .status(404)
            .send();
    }
});

// Create an animal
animalsRouter.post('/', (req, res, next) => {
    const receivedAnimal = createElement('animals', req.query);
    if (receivedAnimal) {
        animals.push(receivedAnimal);
        res
            .status(201)
            .send(receivedAnimal);
    } else {
        res
            .status(400)
            .send();
    }
});

// Update an animal
animalsRouter.put('/:id', (req, res, next) => {
    const animalIndex = getIndexById(req.params.id, animals);
    if (animalIndex !== -1) {
        updateElement(req.params.id, req.query, animals);
        res.send(animals[animalIndex]);
    } else {
        res
            .status(404)
            .send();
    }
});

// Delete a single animal
animalsRouter.delete('/:id', (req, res, next) => {
    const animalIndex = getIndexById(req.params.id, animals);
    if (animalIndex !== -1) {
        animals.splice(animalIndex, 1);
        res
            .status(204)
            .send();
    } else {
        res
            .status(404)
            .send();
    }
});

module.exports = animalsRouter;
