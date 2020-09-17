require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./models/person')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

morgan.token('req-body', (req) => {
  return req.method === 'POST' ? JSON.stringify(req.body) : ' ';
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'));

const maxId = 10000000000;

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
];

const generateId = () => {
  return Math.floor(Math.random() * maxId);
}

app.get('/info', (req,res) => {
  res.send(`<div><p>Phonebook has info for ${persons.length} people</p>${new Date()}</div>`)
});

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons);
  });
});

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(returnedPerson => {
    res.json(returnedPerson);
  });
});

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(p => p.id !== id);
  res.status(204).end();
});

app.post('/api/persons', (req, res) => {
  const body = req.body;

  // if (!(body.name && body.number)) {
  //   return res.status(400).json({
  //     error: 'must have name and number'
  //   });
  // }

  // if (persons.find(p => p.name === body.name)) {
  //   return res.status(400).json({
  //     error: 'name must be unique'
  //   });
  // }

  const person = new Person({
    name: body.name,
    number: body.number
  });

  person.save().then(savedPerson => {
    res.json(savedPerson);
  })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
