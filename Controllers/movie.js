const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMoviePartialMatch = (request, response) => {
  const { input } = request.params

  // eslint-disable-next-line max-len
  const foundDirector = movies.filter((movie) => movie.directors.concat(movie.title).join().toLowerCase().includes(input.toLowerCase()))

  return response.send(foundDirector)
}
const saveNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('All fields required: title, directors, releaseDate, rating, runTime, genres')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  newMovie.title = movies.length + 1

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}



module.exports = { getAllMovies, getMoviePartialMatch, saveNewMovie }
