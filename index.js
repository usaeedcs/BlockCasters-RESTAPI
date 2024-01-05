const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());  // Adding a piece of middleware

const genres = [
    { id: 1, name: 'horror' },
    { id: 2, name: 'thriller' },
    { id: 3, name: 'western' },
    { id: 4, name: 'action' },
    { id: 5, name: 'science fiction' },
    { id: 6, name: 'romance' },
    { id: 7, name: 'drama' },
    { id: 8, name: 'comedy' },
    { id: 9, name: 'adeventure' },
    { id: 10, name: 'mystery' }
];
app.get('/', (req, res) => {
    res.send('Welcome to the Genres API!');
});

app.get('/api/genres/:id', (req, res) => { 
    const genre = genres.find(c => c.id === parseInt(req.params.id)); 
    if (!genre) {
        res.status(404).send('The genre with the given ID was not found.');
        return;
    }
    res.send(genre); 
});

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.post('/api/genres', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id))
    if (!genre) {
        res.status(404).send('The genre with the given ID was not found.');
        return;
    } 

    const { error } = validateGenre(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    genre.name = req.body.name;
    res.send(genre);
});


app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) {
        res.status(404).send('The genre with the given ID was not found.');
        return;
    }
    const index = genres.indexOf(genre);
    res.send(genre);
    genres.splice(index, 1);
});

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    }; 
    return Joi.validate(genre, schema);
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

