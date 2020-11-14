const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMoviePartialMatch, saveNewMovie } = require('./Controllers/movie')
const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:input', getMoviePartialMatch)

app.post('/movies', bodyParser.json(), saveNewMovie)


// app.post('/movies', bodyParser.json(), saveNewMovie)

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})

